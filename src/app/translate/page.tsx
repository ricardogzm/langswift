import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import TranslationSection from "./components/translation-section";

export const metadata: Metadata = {
  title: "Translation",
  description: "Translate text from one language to another.",
  openGraph: {
    ...siteConfig.openGraph,
    title: "Translation",
    description: "Translate text from one language to another.",
    url: `${siteConfig.url}/translate`,
  },
};

export default function TranslationPage() {
  return (
    <main className="mx-auto px-4 md:px-8 xl:max-w-[1400px]">
      <TranslationSection />
      {/* TODO: Utilities */}
      <section className="py-14 md:py-24"></section>
    </main>
  );
}
