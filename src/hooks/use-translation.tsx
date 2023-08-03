import { useAtom } from "jotai";
import { fromLanguageAtom, toLanguageAtom } from "@/atoms/language-atoms";

import { useCompletion } from "ai/react";

import { useToast } from "@/components/ui/use-toast";

export default function useTranslation() {
  const [fromLanguage] = useAtom(fromLanguageAtom);
  const [toLanguage] = useAtom(toLanguageAtom);

  const { toast } = useToast();

  const completionProperties = useCompletion({
    id: "translation",
    api: "/api/translate",
    body: {
      fromLanguage,
      toLanguage,
    },
    onError: (error) => {
      const body = JSON.parse(error.message);

      toast({
        title: "Error",
        description: body.error,
        duration: 3000,
      });
    },
  });

  return {
    translate: completionProperties.complete,
    translation: completionProperties.completion,
    isLoading: completionProperties.isLoading,
    stopTranslation: completionProperties.stop,
  };
}
