"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function NextThemesProvider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider attribute="class" enableSystem enableColorScheme={false}>
      {children}
    </ThemeProvider>
  );
}
