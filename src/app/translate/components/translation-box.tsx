import React from "react";
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

export default function TranslationBox() {
  const { toast } = useToast();

  const { translation } = useTranslation();
  const [isCopied, setIsCopied] = React.useState(false);
  const debouncedCopyReset = useDebouncedCallback(() => {
    setIsCopied(false);
  }, 3000);

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(translation).then(() => {
      setIsCopied(true);
      debouncedCopyReset();

      toast({
        title: "Copied to clipboard",
        description: "The translation has been copied to your clipboard.",
        duration: 3000,
      });
    });
  }

  return (
    <div className="relative min-h-[9rem] rounded-md border md:min-h-[20rem] md:w-1/2">
      <div className="break-words px-3 py-2 pr-14 text-base md:py-3 md:pl-4 lg:text-lg">
        {translation}
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
