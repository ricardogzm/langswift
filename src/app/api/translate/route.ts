import { env } from "@/env.mjs";

import { NextResponse } from "next/server";

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

import { fromZodError } from "zod-validation-error";
import { translationDataSchema } from "@/lib/schemas/translation-data";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const json = await req.json();
  const result = translationDataSchema.safeParse(json);

  if (!result.success) {
    const validationError = fromZodError(result.error);

    return NextResponse.json(
      {
        error: validationError.message,
      },
      { status: 400 },
    );
  }

  const { prompt, fromLanguage, toLanguage } = result.data;

  const finalPrompt = `Given the following text in ${fromLanguage}, translate it to ${toLanguage}. Only respond with the translated text.
  Text content:
  ${prompt}
  
  Translation:
  `;

  // Create a chat completion using OpenAIApi
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: finalPrompt,
      },
    ],
    max_tokens: 500,
    temperature: 0.6,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  // Transform the response into a readable stream
  const stream = OpenAIStream(response);

  // Return a StreamingTextResponse, which can be consumed by the client
  return new StreamingTextResponse(stream);
}
