import { NextThemesProvider } from "@/libs";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { FC, ReactElement, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.5,
};

export const metadata: Metadata = {
  creator: "Gede Dewo Wahyu M.W",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  applicationName: "DIZETO",
  publisher: "Vercel",
  robots: { index: true, follow: true },
  title: "DIZETO | PROFESSIONAL SERVICES",
  description: "Dizeto is a vendor that offers photography, videography, talent, and music services.",
  keywords:
    "dizeto, bandung, indonesia, vendor, jasa foto, jasa video, jasa fotografer, jasa videografer, pre-wedding, wedding, dokumentasi, foto produk, fotografi, videografi",
  metadataBase: new URL("https://dizeto-dev.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://dizeto-dev.vercel.app/",
    title: "DIZETO | PROFESSIONAL SERVICES",
    description: "Dizeto is a vendor that offers photography, videography, talent, and music services.",
    siteName: "DIZETO",
    images: [
      {
        url: "https://dizeto-dev.vercel.app/assets/images/logo/dizeto.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dizeto_id",
    creator: "@dizeto_id",
    title: "DIZETO | PROFESSIONAL SERVICES",
    description: "Dizeto is a vendor that offers photography, videography, talent, and music services.",
    images: {
      url: "https://dizeto-dev.vercel.app/assets/images/logo/dizeto.webp",
    },
  },
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  console.log("© 2021 DIZETO. All rights reserved.");
  console.log("Created by Gede Dewo Wahyu M.W with 🖤");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
