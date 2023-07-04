import { env } from "@/env.mjs";
import { NextResponse } from "next/server";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { translationDataSchema } from "@/lib/schemas/translation-data";

export const runtime = "edge";

const config = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const json = await req.json();
  const result = translationDataSchema.safeParse(json);

  if (!result.success) {
    return NextResponse.json(
      {
        issues: result.error.issues.map((issue) => ({
          message: issue.message,
          path: issue.path,
        })),
      },
      { status: 400 }
    );
  }

  const { prompt, fromLanguage, toLanguage } = result.data;

  const finalPrompt = `Given the following text in ${fromLanguage}, translate it to ${toLanguage}. Only respond with the translated text. Text content:\n\n${prompt}\n\nTranslation:\n`;

  // Create a chat completion using OpenAIApi
  const response = await openai.createChatCompletion({
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
