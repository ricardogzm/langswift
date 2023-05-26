import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { LanguageSelector } from "./components/language-selector";

export default function TranslationPage() {
  return (
    <main className="container">
      <section className="pt-14">
        <h1 className="pb-4 text-5xl font-extrabold tracking-tighter">
          Translate
        </h1>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          {/* Language configuration header */}
          <div className="flex items-center px-4 py-2">
            <div className="flex-1">Detect language</div>
            <Button variant="ghost" size="sm" className="w-9 px-0">
              <ArrowLeftRight />
            </Button>
            <div className="flex-1">
              <LanguageSelector className="ml-2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
