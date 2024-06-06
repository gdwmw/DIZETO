import type { Metadata, Viewport } from "next";

import { FC, ReactElement, ReactNode } from "react";

import { Inter } from "next/font/google";

import { NextThemesProvider } from "@/libs";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  initialScale: 0.5,
  width: "device-width",
};

export const metadata: Metadata = {
  authors: [{ name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" }],
  category: "Photography, Videography, Talent, Music Services",
  creator: "Gede Dewo Wahyu M.W",
  publisher: "Gede Dewo Wahyu M.W",
  referrer: "strict-origin-when-cross-origin",
  title: {
    default: "DIZETO | PROFESSIONAL SERVICES",
    template: "DIZETO | %s",
  },
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
