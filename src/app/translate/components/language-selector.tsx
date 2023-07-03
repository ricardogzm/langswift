import { useEffect, useState } from "react";
import languages from "@/lib/constants/languages";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LanguageType } from "@/lib/constants/general";

interface LanguageSelectorProps extends ButtonProps {
  languageType: LanguageType;
  languageKey: string;
  onLanguageKeyChange: (key: string) => void;
}

export default function LanguageSelector({
  languageType,
  languageKey,
  onLanguageKeyChange,
  ...props
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const selectedLanguage = languages.get(languageKey);

  useEffect(() => {
    if (!languageKey) {
      return;
    }

    localStorage.setItem(languageType, languageKey);
  }, [languageKey, languageType]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          {...props}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between sm:w-44 md:text-base",
            props.className
          )}
        >
          {selectedLanguage || "Language..."}
          <ChevronsUpDownIcon className="ml-2 hidden h-4 w-4 shrink-0 opacity-50 sm:inline" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-44 p-0" align="end">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup className="h-auto max-h-48 overflow-auto md:max-h-72 lg:max-h-96">
            {Array.from(languages).map(([key, language]) => (
              <CommandItem
                key={key}
                value={key}
                onSelect={(currentKey) => {
                  onLanguageKeyChange(currentKey);
                  setOpen(false);
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    key === languageKey ? "opacity-100" : "opacity-0"
                  )}
                />
                {language}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
