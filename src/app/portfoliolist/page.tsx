import { FC, ReactElement } from "react";

import { Metadata } from "next";

import { PortfolioList as ListPort } from "@/modules/list-portfolio";

export const metadata: Metadata = {
  description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
  keywords: ["dizeto", "portfolio list", "dizeto portfolio list"],
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
    title: "DIZETO | PORTFOLIO LIST",
    type: "website",
    url: "https://dizeto.vercel.app/portfoliolist",
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
  title: "PORTFOLIO LIST",
  twitter: {
    card: "summary_large_image",
    creator: "@gdwmw",
    description: "See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity.",
    images: ["https://dizeto.vercel.app/assets/images/logos/dizeto.png"],
    title: "DIZETO | PORTFOLIO LIST",
  },
};

const PortfolioList: FC = (): ReactElement => {
  return <ListPort />;
};

export default PortfolioList;
