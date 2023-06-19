import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PromptInput from "./components/prompt-input";
import TranslationBox from "./components/translation-box";
import LanguageSelector from "./components/language-selector";

export default function TranslationPage() {
  return (
    <main className="container">
      <section className="pt-8 md:pt-14">
        <h1 className="pb-4 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
          Translate
        </h1>
        <div className="space-y-3">
          {/* Language configuration header */}
          <div className="flex items-center">
            <div className="flex-1 text-sm md:text-base">Detect language</div>
            <Button variant="ghost" size="sm" className="w-9 px-0">
              <ArrowLeftRight />
            </Button>
            <div className="flex-1">
              <LanguageSelector className="ml-2" />
            </div>
          </div>
          {/* Text boxes */}
          <div className="flex flex-col gap-4 md:flex-row">
            <PromptInput />
            <TranslationBox />
          </div>
        </div>
      </section>
      {/* TODO: Utilities */}
      <section className="py-14 md:py-24"></section>
    </main>
  );
}
