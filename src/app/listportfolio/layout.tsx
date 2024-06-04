import type { Metadata, Viewport } from "next";
import { FC, ReactNode } from "react";

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
  title: "DIZETO | LIST PORTFOLIO",
  description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
  keywords:
    "dizeto list portfolio, bandung, indonesia, vendor, jasa foto, jasa video, jasa fotografer, jasa videografer, pre-wedding, wedding, dokumentasi, foto produk, fotografi, videografi",
  metadataBase: new URL("https://dizeto-dev.vercel.app/listportfolio"),
  openGraph: {
    type: "website",
    url: "https://dizeto-dev.vercel.app/listportfolio",
    title: "DIZETO | LIST PORTFOLIO",
    description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
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
    title: "DIZETO | LIST PORTFOLIO",
    description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
    images: {
      url: "https://dizeto-dev.vercel.app/assets/images/logo/dizeto.webp",
    },
  },
};

const ListPortfolioLayout: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  return children;
};

export default ListPortfolioLayout;
