import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import { LinksLayout } from "@/layouts/links";

export const viewport: Viewport = {
  initialScale: 0.8,
  width: "device-width",
};

export const metadata: Metadata = {
  description: "Come visit social media connected to DIZETO.",
  keywords: ["dizeto", "dizeto links"],
  openGraph: {
    description: "Come visit social media connected to DIZETO.",
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
    title: "DIZETO | LINKS",
    type: "website",
    url: "https://dizeto.vercel.app/",
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
  title: "LINKS",
  twitter: {
    card: "summary_large_image",
    creator: "@gdwmw",
    description: "Come visit social media connected to DIZETO.",
    images: ["https://dizeto.vercel.app/assets/images/logos/dizeto.png"],
    title: "DIZETO | LINKS",
  },
};

const Links: FC = (): ReactElement => {
  return <LinksLayout />;
};

export default Links;
