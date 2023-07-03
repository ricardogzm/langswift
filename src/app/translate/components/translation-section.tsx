"use client";

import { useEffect, useState } from "react";
import { useCompletion } from "ai/react";
import { ArrowLeftRight } from "lucide-react";
import { LanguageType } from "@/lib/constants/general";

import PromptInput from "./prompt-input";
import TranslationBox from "./translation-box";
import LanguageSelector from "./language-selector";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { TranslationContext } from "@/contexts/translation-context";

export default function TranslationSection() {
  const { toast } = useToast();
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");

  const { complete, completion, isLoading, stop } = useCompletion({
    api: "/api/translate",
    body: {
      fromLanguage,
      toLanguage,
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        duration: 3000,
      });
    },
  });

  function swapLanguages() {
    const previousFromLanguage = fromLanguage;

    setFromLanguage(toLanguage);
    setToLanguage(previousFromLanguage);
  }

  useEffect(() => {
    const storageFromLanguage = localStorage.getItem("fromLanguage");
    const storageToLanguage = localStorage.getItem("toLanguage");

    if (storageFromLanguage) {
      setFromLanguage(storageFromLanguage);
    }

    if (storageToLanguage) {
      setToLanguage(storageToLanguage);
    }
  }, []);

  return (
    <TranslationContext.Provider
      value={{ complete, completion, isLoading, stop }}
    >
      <section className="pt-4 sm:pt-8 md:pt-10 lg:pt-12">
        <h1 className="pb-4 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
          Translate
        </h1>
        <div className="space-y-3">
          {/* Language configuration header */}
          <div className="flex items-center">
            {/* From language */}
            <div className="flex-1">
              <LanguageSelector
                languageType={LanguageType.From}
                languageKey={fromLanguage}
                onLanguageKeyChange={setFromLanguage}
                aria-label="From language"
              />
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
              <LanguageSelector
                className="ml-2"
                languageType={LanguageType.To}
                languageKey={toLanguage}
                onLanguageKeyChange={setToLanguage}
                aria-label="To language"
              />
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
    </TranslationContext.Provider>
  );
}
