import { Metadata } from "next";

type OpenGraph = Metadata["openGraph"];

const PROJECT_ENV = process.env.VERCEL_ENV ?? "development";
const PROJECT_URL = process.env.VERCEL_URL ?? "http://localhost:3000";

const baseURL =
  PROJECT_ENV === "production" ? "https://langswift.com" : PROJECT_URL;

const openGraph: OpenGraph = {
  type: "website",
  siteName: "Langswift",
  images: [
    {
      url: "/og.png",
      alt: "Langswift",
      type: "image/png",
    },
  ],
};

export const siteConfig = {
  url: baseURL,
  name: "Langswift",
  description:
    "The ultimate language toolkit powered by AI. Tranlation, grammar review, and more!",
  author: "ricardogzm",
  links: {
    github: "https://github.com/ricardogzm",
  },
  openGraph,
};

export type SiteConfig = typeof siteConfig;
