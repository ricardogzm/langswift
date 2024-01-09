"use client";

import React, { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { ClipboardCopyIcon, ClipboardCheckIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import useTranslation from "@/hooks/use-translation";
import { INPUT_CLEARED } from "@/lib/constants/events";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import { TranslationSkeleton } from "./translation-skeleton";

export function TranslationBox() {
  const { translation, setTranslation, isLoading } = useTranslation();

  const { toast } = useToast();
  const [, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);
  const debouncedCopyReset = useDebouncedCallback(() => {
    setIsCopied(false);
  }, 3000);

  async function handleCopyToClipboard() {
    try {
      await copyToClipboard(translation);
      setIsCopied(true);
      debouncedCopyReset();

      toast({
        title: "Copied to clipboard",
        description: "The translation has been copied to your clipboard.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        duration: 3000,
      });
    }
  }

  useEffect(() => {
    function handleInputClear() {
      setTranslation("");
    }

    window.addEventListener(INPUT_CLEARED, handleInputClear);
    return () => {
      window.removeEventListener(INPUT_CLEARED, handleInputClear);
    };
  }, [setTranslation]);

  return (
    <div className="relative min-h-[9rem] rounded-md border md:min-h-[20rem] md:w-1/2">
      <div className="whitespace-pre-line break-words px-3 py-2 pr-14 text-base lg:py-3 lg:pl-4 lg:text-lg">
        {isLoading && translation === "" ? (
          <TranslationSkeleton />
        ) : (
          translation
        )}
      </div>

      {/* Copy to clipboard button */}
      {translation.length > 0 && (
        <div className="absolute right-2 top-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  handleCopyToClipboard();
                }}
              >
                {isCopied ? <ClipboardCheckIcon /> : <ClipboardCopyIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy to clipboard</TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
