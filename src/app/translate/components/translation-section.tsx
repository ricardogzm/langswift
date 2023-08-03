"use client";

import { ArrowLeftRight } from "lucide-react";
import { LanguageType } from "@/lib/constants/general";

import PromptInput from "./prompt-input";
import TranslationBox from "./translation-box";
import LanguageSelector from "./language-selector";

import { Button } from "@/components/ui/button";

import { useAtom } from "jotai";
import { fromLanguageAtom, toLanguageAtom } from "@/atoms/language-atoms";
import useTranslation from "@/hooks/use-translation";

import ClientOnly from "@/components/client-only";

export default function TranslationSection() {
  const [fromLanguage, setFromLanguage] = useAtom(fromLanguageAtom);
  const [toLanguage, setToLanguage] = useAtom(toLanguageAtom);
  const { isLoading } = useTranslation();

  function swapLanguages() {
    const previousFromLanguage = fromLanguage;

    setFromLanguage(toLanguage);
    setToLanguage(previousFromLanguage);
  }

  return (
    <section className="pt-4 sm:pt-8 md:pt-10 lg:pt-12">
      <h1 className="pb-4 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
        Translate
      </h1>
      <div className="space-y-3">
        {/* Language configuration header */}
        <div className="flex items-center">
          {/* From language */}
          <div className="flex-1">
            <ClientOnly>
              <LanguageSelector
                languageType={LanguageType.From}
                languageKey={fromLanguage}
                onLanguageKeyChange={setFromLanguage}
                aria-label="From language"
              />
            </ClientOnly>
          </div>
          {/* Swap button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => swapLanguages()}
            aria-label="Swap languages"
          >
            <ArrowLeftRight />
          </Button>
          {/* To language */}
          <div className="flex-1">
            <ClientOnly>
              <LanguageSelector
                className="ml-2"
                languageType={LanguageType.To}
                languageKey={toLanguage}
                onLanguageKeyChange={setToLanguage}
                aria-label="To language"
              />
            </ClientOnly>
          </div>
        </div>

        {/* Text boxes */}
        <div className="flex flex-col gap-4 md:flex-row">
          <PromptInput />
          <TranslationBox />
        </div>
        <p>Current state: {isLoading ? "Generating..." : "Idle"}</p>
      </div>
    </section>
  );
}
