import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import HomeLayout from "@/src/layouts/home";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

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
        url: "https://dizeto.zettara.com/assets/images/logos/dizeto.png", // Must be an absolute URL and PNG format
        width: 800,
      },
    ],
    locale: "en_US",
    siteName: "DIZETO",
    title: "DIZETO | ROFESSIONAL SERVICES",
    type: "website",
    url: "https://dizeto.zettara.com/",
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
    images: ["https://dizeto.zettara.com/assets/images/logos/dizeto.png"], // Must be an absolute URL and PNG format
    title: "DIZETO | ROFESSIONAL SERVICES",
  },
};

const HomePage: FC = (): ReactElement => <HomeLayout />;

export default HomePage;
