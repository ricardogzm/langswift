import "./globals.css";
import { Metadata } from "next";
import { manrope } from "./fonts";
import { Providers } from "./Providers";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Langswift",
  description: "Translations powered by AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable}`} suppressHydrationWarning>
      <body className={`min-h-screen antialiased`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
