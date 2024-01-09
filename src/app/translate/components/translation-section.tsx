import { TextInput } from "./input/text-input";
import { TranslationBox } from "./output/translation-box";
import { LanguageSettings } from "./language-settings/language-settings";

export default function TranslationSection() {
  return (
    <section className="pt-4 sm:pt-8 md:pt-10 lg:pt-12">
      <h1 className="pb-4 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
        Translate
      </h1>
      <div className="space-y-3">
        <LanguageSettings />

        {/* Text boxes */}
        <div className="flex flex-col gap-4 md:flex-row">
          <TextInput />
          <TranslationBox />
        </div>
      </div>
    </section>
  );
}
