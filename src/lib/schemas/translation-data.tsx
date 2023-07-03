import { z } from "zod";
import languages from "@/lib/constants/languages";
import { MAX_CHARACTERS } from "../constants/general";

export const translationDataSchema = z.object({
  prompt: z.string().min(1).max(MAX_CHARACTERS),
  fromLanguage: z
    .string()
    .refine((key) => languages.has(key))
    .transform((key) => languages.get(key)!),
  toLanguage: z
    .string()
    .refine((key) => languages.has(key))
    .transform((key) => languages.get(key)!),
});

export type TranslationData = z.infer<typeof translationDataSchema>;
