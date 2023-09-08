![hero](public/banner.png)

<p align="center">An open source web app for AI-powered translations built with <b>Next.js 13</b> and many more modern technologies.</p>

<p align="center">
  Live on <a href="https://langswift.com" target="_blank" rel="noopener noreferrer">langswift.com</a>!
</p>

<br/>

## Features

- [Next.js 13](https://nextjs.org) App Router
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for translation streaming
- AI translation using OpenAI's `gpt-3.5-turbo` model
- Theming and styling with:
  - [shadcn/ui](https://ui.shadcn.com)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless UI components
- [Zod](https://zod.dev/) for schema validation
- [Jotai](https://jotai.org/), a primitive and flexible React state management library

## Getting Started

### Running locally

First, be sure to set up your `OPENAI_API_KEY` environment variable. You can use [`.env.local`](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#loading-environment-variables) for that.

> [!IMPORTANT]
> If you don't set the environment variable first, the application will crash, as it uses [t3-env](https://github.com/t3-oss/t3-env) for environment variables validation.

Then, install dependencies and run the development server. This project uses **pnpm**.

```bash
pnpm install
pnpm dev
```

Your application will be available at [http://localhost:3000/translate](http://localhost:3000/translate)! ✨
