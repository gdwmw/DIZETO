import type { Metadata } from "next";

import { FC, PropsWithChildren, ReactElement } from "react";

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

type T = PropsWithChildren;

const RootLayout: FC<T> = ({ ...props }): ReactElement => {
  return (
    <html className="scroll-smooth dark:bg-dark" lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider>
          <ReactQueryProvider>{props.children}</ReactQueryProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
