import "./globals.css";
import { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import Footer from "@/components/footer";
import { Providers } from "@/lib/Providers";
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
