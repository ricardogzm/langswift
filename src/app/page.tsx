import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container">
      <section className="max-w-2xl space-y-4 pt-14 md:pt-24 lg:max-w-[50rem]">
        <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl">
          Breaking down language barriers with ease.
        </h1>
        <p className="max-w-lg text-lg font-medium text-muted-foreground sm:text-xl">
          Language made accessible, communication made flawless. Unlock the
          powers of translation and grammar enhancement with AI.
        </p>
        <div className="flex gap-x-4">
          <Link href="/translate" className={cn(buttonVariants())}>
            Get started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ricardogzm/langswift"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
