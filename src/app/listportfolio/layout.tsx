import type { Metadata, Viewport } from "next";

import { FC, ReactNode } from "react";

export const viewport: Viewport = {
  initialScale: 0.5,
  width: "device-width",
};

export const metadata: Metadata = {
  applicationName: "DIZETO",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  creator: "Gede Dewo Wahyu M.W",
  description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
  keywords:
    "dizeto list portfolio, bandung, indonesia, vendor, jasa foto, jasa video, jasa fotografer, jasa videografer, pre-wedding, wedding, dokumentasi, foto produk, fotografi, videografi",
  metadataBase: new URL("https://dizeto.vercel.app/listportfolio"),
  openGraph: {
    description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
    images: [
      {
        url: "https://dizeto.vercel.app/assets/images/logo/dizeto.webp",
      },
    ],
    siteName: "DIZETO",
    title: "DIZETO | LIST PORTFOLIO",
    type: "website",
    url: "https://dizeto.vercel.app/listportfolio",
  },
  publisher: "Vercel",
  robots: { follow: true, index: true },
  title: "DIZETO | LIST PORTFOLIO",
  twitter: {
    card: "summary_large_image",
    creator: "@dizeto_id",
    description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
    images: {
      url: "https://dizeto.vercel.app/assets/images/logo/dizeto.webp",
    },
    site: "@dizeto_id",
    title: "DIZETO | LIST PORTFOLIO",
  },
};

const ListPortfolioLayout: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  return children;
};

export default ListPortfolioLayout;
