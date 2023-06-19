"use client";

import { useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function PromptInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function resizeTextarea(event?: React.ChangeEvent<HTMLTextAreaElement>) {
    const textarea = textareaRef.current;

    if (textarea) {
      const isMd = window.matchMedia("(min-width: 768px)").matches;

      // Only resize on larger screens
      if (!isMd) {
        textarea.removeAttribute("style");
        return;
      }

      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + 2 + "px";
    }
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
    <Textarea
      className="min-h-[9rem] resize-none text-sm md:min-h-[20rem] md:w-1/2 md:text-base lg:text-lg"
      ref={textareaRef}
      onChange={resizeTextarea}
      onFocus={resizeTextarea}
      onBlur={resizeTextarea}
      autoComplete="off"
      autoCorrect="off"
      placeholder="Type or paste here your text to translate it."
    />
  );
}
