"use client";

import { ThemeProvider } from "next-themes";
import { IconContext } from "@phosphor-icons/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <IconContext.Provider value={{ weight: "duotone" }}>
        {children}
      </IconContext.Provider>
    </ThemeProvider>
  );
}
