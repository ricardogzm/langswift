"use client";

import { Button } from "@/components/ui/button";

import { useAtom } from "jotai";
import { fromLanguageAtom, toLanguageAtom } from "@/atoms/language-atoms";

import { ArrowLeftRight } from "lucide-react";
import LanguageSelector from "./language-selector";
import useTranslation from "@/hooks/use-translation";
import LoadingDots from "@/components/icons/animated/loading-dots";

export function LanguageSettings() {
  const [fromLanguage, setFromLanguage] = useAtom(fromLanguageAtom);
  const [toLanguage, setToLanguage] = useAtom(toLanguageAtom);

  const { isLoading } = useTranslation();

  function swapLanguages() {
    const previousFromLanguage = fromLanguage;

    setFromLanguage(toLanguage);
    setToLanguage(previousFromLanguage);
  }

  return (
    <div className="flex items-center">
      {/* From language */}
      <div className="flex-1">
        <LanguageSelector
          languageKey={fromLanguage}
          onLanguageKeyChange={setFromLanguage}
          aria-label="From language"
        />
      </div>

      {/* Swap button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => swapLanguages()}
        aria-label="Swap languages"
      >
        <ArrowLeftRight />
      </Button>

      {/* To language */}
      <div className="flex flex-1 items-center">
        <LanguageSelector
          className="ml-2"
          languageKey={toLanguage}
          onLanguageKeyChange={setToLanguage}
          aria-label="To language"
        />

        {isLoading && (
          <div className="ml-2 size-8">
            <LoadingDots />
          </div>
        )}
      </div>
    </div>
  );
}
