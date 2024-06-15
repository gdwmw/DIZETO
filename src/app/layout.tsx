import type { Metadata } from "next";

import { FC, ReactElement, ReactNode } from "react";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
