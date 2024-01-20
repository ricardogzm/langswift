"use client";

import { useEffect, useRef } from "react";

import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { inputAtom } from "@/atoms/io-atoms";

import { emitEvent } from "@/helpers/emit-event";

import { InputControls } from "./input-controls";
import useTranslation from "@/hooks/use-translation";

import { INPUT_CLEARED } from "@/lib/constants/events";
import { MAX_CHARACTERS } from "@/lib/constants/general";
import { cn } from "@/lib/utils";

export function TextInput() {
  const [inputText, setInputText] = useAtom(inputAtom);
  const clearInput = useResetAtom(inputAtom);

  const { stopTranslation, isLoading, translate } = useTranslation();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function resizeTextarea() {
    const textarea = textareaRef.current!;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  function handleTranslateHotkey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    const canTranslate =
      inputText.length > 0 && inputText.length <= MAX_CHARACTERS;

    if (!canTranslate) return;

    // Detect Ctrl (or Cmd) + Enter to translate
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      stopTranslation();
      translate(inputText);
    }
  }

  useEffect(() => {
    resizeTextarea();
  }, [inputText]);

  useEffect(() => {
    function handleWindowResize() {
      resizeTextarea();
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative rounded-md border border-input md:w-1/2",
        "ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
      )}
    >
      <Textarea
        variant="ringless"
        className="min-h-[9rem] resize-none rounded-none border-0 pr-14 text-base md:min-h-[20rem] lg:py-3 lg:pl-4 lg:text-lg"
        ref={textareaRef}
        value={inputText}
        autoComplete="on"
        autoCorrect="off"
        placeholder="Type or paste here your text to translate it."
        onChange={(e) => {
          setInputText(e.target.value);

          if (isLoading) stopTranslation();
        }}
        onKeyDown={handleTranslateHotkey}
      />

      {/* Clear button */}
      {inputText.length > 0 && (
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 z-10"
          onClick={() => {
            clearInput();
            stopTranslation();

            emitEvent(INPUT_CLEARED);
          }}
        >
          <XIcon />
        </Button>
      )}

      <InputControls />
    </div>
  );
}
