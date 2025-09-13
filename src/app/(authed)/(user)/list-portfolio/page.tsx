import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import ListPortfolioLayout from "@/src/layouts/list-portfolio";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
  keywords: ["dizeto", "list portfolio", "dizeto list portfolio"],
  openGraph: {
    description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
    images: [
      {
        alt: "DIZETO",
        height: 800,
        url: "https://dizeto.vercel.app/assets/images/logos/dizeto.png",
        width: 800,
      },
    ],
    locale: "en_US",
    siteName: "DIZETO",
    title: "DIZETO | LIST PORTFOLIO",
    type: "website",
    url: "https://dizeto.vercel.app/list-portfolio",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      noimageindex: false,
    },
    index: true,
    nocache: false,
  },
  title: "LIST PORTFOLIO",
  twitter: {
    card: "summary_large_image",
    creator: "@gdwmw",
    description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
    images: ["https://dizeto.vercel.app/assets/images/logos/dizeto.png"],
    title: "DIZETO | LIST PORTFOLIO",
  },
};

const ListPortfolioPage: FC = (): ReactElement => <ListPortfolioLayout />;

export default ListPortfolioPage;
