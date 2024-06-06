import { FC, ReactElement } from "react";

import { Metadata } from "next";

import { Footer } from "@/components";
import { Header, Main } from "@/modules/landing-page";

export const metadata: Metadata = {
  description: "DIZETO is a vendor that offers photography, videography, talent, and music services.",
  keywords: [
    "dizeto",
    "bandung",
    "indonesia",
    "vendor",
    "jasa foto",
    "jasa video",
    "jasa fotografer",
    "jasa videografer",
    "pre-wedding",
    "wedding",
    "dokumentasi",
    "foto produk",
    "fotografi",
    "videografi",
  ],
  openGraph: {
    description: "DIZETO is a vendor that offers photography, videography, talent, and music services.",
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
    title: "DIZETO | PROFESSIONAL SERVICES",
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
  twitter: {
    card: "summary_large_image",
    creator: "@gdwmw",
    description: "DIZETO is a vendor that offers photography, videography, talent, and music services.",
    images: ["https://dizeto.vercel.app/assets/images/logos/dizeto.png"],
    title: "DIZETO | PROFESSIONAL SERVICES",
  },
};

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default LandingPage;
