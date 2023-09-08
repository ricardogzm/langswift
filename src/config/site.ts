export const siteConfig = {
  name: "Langswift",
  description:
    "The ultimate language toolkit powered by AI. Tranlation, grammar review, and more!",
  url: "https://langswift.com",
  author: "ricardogzm",
  links: {
    github: "https://github.com/ricardogzm",
  },
  openGraph: {
    type: "website",
    siteName: "Langswift",
    images: [
      {
        url: "/og.png",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
