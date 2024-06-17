import type { Metadata } from "next";

import { FC, ReactElement, ReactNode } from "react";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { NextThemesProvider, ReactQueryProvider } from "@/libs";

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

type T = {
  children: ReactNode;
};

const RootLayout: FC<T> = ({ children }): ReactElement => {
  return (
    <html className="scroll-smooth dark:bg-dark" lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
