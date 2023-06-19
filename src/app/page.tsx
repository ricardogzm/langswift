import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container">
      <section className="flex flex-col items-center gap-y-6 py-14 text-center md:py-32">
        <h1 className="max-w-2xl bg-gradient-to-br from-indigo-500 to-pink-500 text-4xl font-extrabold tracking-tighter text-gradient sm:text-5xl md:text-6xl lg:max-w-[50rem] lg:text-7xl">
          Breaking down language barriers with ease
        </h1>
        <p className="max-w-lg text-lg font-medium text-muted-foreground sm:text-xl">
          Language made accessible, communication made flawless. Unlock the
          powers of translation and grammar enhancement with AI.
        </p>
        <div className="flex gap-x-4">
          <Link href="/translate" className={cn(buttonVariants(), "px-8")}>
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
      <section className="py-14 md:py-24">
        <h2 className="font text-center text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Features
        </h2>
      </section>
    </main>
  );
}
