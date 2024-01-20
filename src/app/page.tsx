import Link from "next/link";

import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NextjsIcon,
  ReactIcon,
  ShadcnIcon,
  ZodIcon,
  VercelIcon,
} from "@/components/icons/brands";

import { TechCard } from "./_components/tech-card";

export default function Home() {
  return (
    <main className="container">
      <section className="flex flex-col items-center gap-y-6 py-14 text-center md:py-32">
        <h1 className="text-balance bg-gradient-to-br from-indigo-500 to-pink-500 text-4xl font-extrabold tracking-tighter text-gradient sm:text-5xl md:text-6xl lg:text-7xl">
          Breaking down language barriers with ease
        </h1>
        <p className="max-w-lg text-balance font-medium text-muted-foreground sm:text-xl">
          Language made accessible, communication made flawless. Unlock the
          powers of translation and grammar enhancement with AI.
        </p>
        <div className="flex gap-x-4">
          <Button asChild>
            <Link href="/translate" className="px-8">
              Get started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ricardogzm/langswift"
            >
              <Github className="mr-2 size-4" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          The stack
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-center font-medium text-muted-foreground sm:text-xl">
          Built with the latest and greatest technologies. This project is open
          source and powered by open source.
        </p>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TechCard
            icon={NextjsIcon}
            title="Next.js 14"
            description="Featuring the new app dir router, layouts and API routes."
          />
          <TechCard
            icon={ReactIcon}
            title="React 18"
            description="Client and Server components."
          />
          <TechCard
            icon={VercelIcon}
            title="Vercel's AI SDK"
            description="Text completion streaming made easy. Used in conjuction with OpenAI's API."
          />
          <TechCard
            icon={ShadcnIcon}
            title="Shadcn/ui"
            description="A collection of UI components for React. Powered by Radix UI and Tailwind CSS."
          />
          <TechCard
            icon={ZodIcon}
            title="Zod"
            description="A TypeScript-first schema validation library."
          />
          <TechCard
            icon="https://raw.githubusercontent.com/pmndrs/jotai/main/img/jotai-mascot.png"
            title="Jotai"
            description="A flexible React state management library."
          />
        </div>
      </section>

      <section className="my-20 flex flex-col items-center gap-4 rounded-md bg-primary p-8 md:p-20">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Join the community
        </h2>
        <p className="mx-auto max-w-xl text-balance text-center font-medium text-primary-foreground/80 sm:text-xl">
          Langswift is an open source project built by{" "}
          <span className="underline">ricardogzm</span>. If you like this
          project, consider starring it on GitHub.
        </p>
        <Button variant="outline" asChild>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ricardogzm/langswift"
          >
            <Github className="mr-2 size-4" />
            Star on GitHub
          </Link>
        </Button>
      </section>
    </main>
  );
}
