import { useEffect, useRef, useState } from "react";
import { MessagesSquare, XIcon, SquareIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import { MAX_CHARACTERS } from "@/lib/constants/general";

import useTranslation from "@/hooks/use-translation";

export default function PromptInput() {
  const [inputText, setInputText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { translate, stopTranslation, isLoading } = useTranslation();

  function resizeTextarea(event?: React.ChangeEvent<HTMLTextAreaElement>) {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }

  function handleSubmitText() {
    const textarea = textareaRef.current;

    if (!textarea) return;

    translate(textarea.value);
  }

  useEffect(() => {
    function handleWindowResize() {
      resizeTextarea(undefined);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="relative rounded-md border md:w-1/2">
      <Textarea
        variant="ringless"
        className="min-h-[9rem] resize-none rounded-none border-0 pr-14 text-base md:min-h-[20rem] md:py-3 md:pl-4 lg:text-lg"
        ref={textareaRef}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          resizeTextarea(e);
        }}
        autoComplete="off"
        autoCorrect="off"
        placeholder="Type or paste here your text to translate it."
      />

      {/* Clear button */}
      {inputText.length > 0 && (
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 z-10"
          onClick={() => {
            setInputText("");
            stopTranslation();
          }}
        >
          <XIcon />
        </Button>
      )}

      {/* Input toolbar */}
      <div className="flex items-center justify-between p-2">
        {/* Character count */}
        <div
          className={cn(
            "ml-2 text-base text-destructive",
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
                onClick={(e) => stop()}
                variant={"destructive"}
                aria-label="Stop translation"
              >
                <SquareIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={8}>Stop translation</TooltipContent>
          </Tooltip>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                onClick={(e) => handleSubmitText()}
                aria-label="Translate"
                disabled={
                  inputText.length === 0 || inputText.length > MAX_CHARACTERS
                }
              >
                <MessagesSquare />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={8}>Translate</TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
