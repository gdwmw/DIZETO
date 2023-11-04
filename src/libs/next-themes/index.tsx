"use client";

import { ThemeProvider } from "next-themes";

export function NextThemesProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ThemeProvider attribute="class" enableSystem enableColorScheme={false}>
      {children}
    </ThemeProvider>
  );
}
