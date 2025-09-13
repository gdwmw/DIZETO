import type { Metadata } from "next";

import { FC, PropsWithChildren, ReactElement } from "react";

import { NextAuthProvider, NextThemesProvider, ReactQueryProvider } from "@/src/libs";

import { geistMono, geistSans, inter, roboto } from "./fonts";
import "./globals.css";

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

type T = Readonly<PropsWithChildren>;

const RootLayout: FC<T> = (props): ReactElement => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} font-inter antialiased`}>
      <NextThemesProvider>
        <ReactQueryProvider>
          <NextAuthProvider>{props.children}</NextAuthProvider>
        </ReactQueryProvider>
      </NextThemesProvider>
    </body>
  </html>
);

export default RootLayout;
