import { createContext } from "react";
import { UseCompletionHelpers } from "ai/react";

interface TranslationStore {
  complete: UseCompletionHelpers["complete"];
  completion: UseCompletionHelpers["completion"];
  isLoading: UseCompletionHelpers["isLoading"];
  stop: UseCompletionHelpers["stop"];
}

export const TranslationContext = createContext({} as TranslationStore);
