import { Metadata } from "next";

type OpenGraph = Metadata["openGraph"];

const openGraph: OpenGraph = {
  type: "website",
  siteName: "Langswift",
  images: [
    {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "Langswift",
    },
  ],
};

export const siteConfig = {
  name: "Langswift",
  description:
    "The ultimate language toolkit powered by AI. Tranlation, grammar review, and more!",
  url: "https://langswift.com",
  author: "ricardogzm",
  links: {
    github: "https://github.com/ricardogzm",
  },
  openGraph,
};

export type SiteConfig = typeof siteConfig;
