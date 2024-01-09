import { StopCircleIcon, SendHorizontalIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";

import { useIsClient } from "@uidotdev/usehooks";
import useTranslation from "@/hooks/use-translation";

import { useAtom } from "jotai";
import { inputAtom } from "@/atoms/io-atoms";

import { cn } from "@/lib/utils";

import { MAX_CHARACTERS } from "@/lib/constants/general";

export function InputControls() {
  const [inputText] = useAtom(inputAtom);
  const { translate, isLoading } = useTranslation();
  const isClient = useIsClient();

  const canTranslate =
    inputText.length > 0 && inputText.length <= MAX_CHARACTERS;

  const isMac = isClient && navigator.userAgent.includes("Mac");

  function handleTranslateText() {
    translate(inputText);
  }

  return (
    <div className="flex items-center justify-between p-2">
      {/* Character count */}
      <div
        className={cn(
          "ml-2 select-none text-base text-destructive",
          inputText.length > MAX_CHARACTERS
            ? "text-red-400"
            : "text-muted-foreground"
        )}
      >
        {inputText.length} / {MAX_CHARACTERS} characters
      </div>

      {/* Translation and stop button */}
      {isLoading ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              onClick={() => stop()}
              variant={"destructive"}
              aria-label="Stop translation"
            >
              <StopCircleIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>Stop translation</TooltipContent>
        </Tooltip>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              type="button"
              onClick={() => handleTranslateText()}
              aria-label="Translate"
              disabled={!canTranslate}
            >
              <SendHorizontalIcon className="text-primary-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>
            Translate
            <Kbd className="ml-2">
              <span>{isMac ? "⌘" : "Ctrl"}</span>
              <span>Enter</span>
            </Kbd>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
