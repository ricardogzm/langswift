"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={100}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </TooltipProvider>
  );
}
