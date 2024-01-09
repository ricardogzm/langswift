import { env } from "@/env.mjs";

import OpenAI from "openai";

import { OpenAIStream } from "ai";

export async function generateStream(
  content: string
): Promise<ReadableStream<string>> {
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    max_tokens: 500,
    temperature: 0.3,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  const stream = OpenAIStream(response);

  return stream;
}
