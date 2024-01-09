import { NextResponse } from "next/server";

import { StreamingTextResponse } from "ai";

import { fromZodError } from "zod-validation-error";
import { translationDataSchema } from "@/lib/schemas/translation-data";

import { generateStream } from "./models/openai";

export const runtime = "edge";

export async function POST(req: Request) {
  const json = await req.json();
  const result = translationDataSchema.safeParse(json);

  if (!result.success) {
    const validationError = fromZodError(result.error);

    return NextResponse.json(
      { error: validationError.message },
      { status: 400 }
    );
  }

  const { prompt, fromLanguage, toLanguage } = result.data;

  const finalPrompt = `
  Given the following text in ${fromLanguage}, translate it to ${toLanguage}. Only respond with the translated text.
  Text content:
  ${prompt}
  
  Translation:
  `;

  const stream = await generateStream(finalPrompt);

  // Return a StreamingTextResponse, which can be consumed by the client
  return new StreamingTextResponse(stream);
}
