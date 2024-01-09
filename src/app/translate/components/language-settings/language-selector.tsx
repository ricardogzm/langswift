import { useState } from "react";
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
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface LanguageSelectorProps extends ButtonProps {
  languageKey: string;
  onLanguageKeyChange: (key: string) => void;
}

export default function LanguageSelector({
  languageKey,
  onLanguageKeyChange,
  ...props
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const selectedLanguage = languages.get(languageKey);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          {...props}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between sm:w-48 md:text-base",
            props.className
          )}
        >
          {selectedLanguage || "Language..."}
          <ChevronsUpDownIcon className="ml-2 hidden h-4 w-4 shrink-0 opacity-50 sm:inline" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-48 p-0" align="end">
        <Command
          filter={(item, query) => {
            if (item.startsWith(query)) {
              return 1;
            }
            return 0;
          }}
        >
          <CommandInput placeholder="Search language..." />
          <CommandList className="h-auto max-h-48 overflow-auto md:max-h-72 lg:max-h-96">
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
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
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
