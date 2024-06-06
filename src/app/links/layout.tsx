import type { Metadata, Viewport } from "next";

import { FC, ReactNode } from "react";

export const viewport: Viewport = {
  initialScale: 0.8,
  width: "device-width",
};

export const metadata: Metadata = {
  applicationName: "DIZETO",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  creator: "Gede Dewo Wahyu M.W",
  description: "Come visit social media connected to Dizeto.",
  metadataBase: new URL("https://dizeto.vercel.app/"),
  openGraph: {
    description: "Come visit social media connected to Dizeto.",
    images: [
      {
        url: "https://dizeto.vercel.app/assets/images/logo/dizeto.webp",
      },
    ],
    siteName: "DIZETO",
    title: "DIZETO | LINKS",
    type: "website",
    url: "https://dizeto.vercel.app/",
  },
  publisher: "Vercel",
  robots: { follow: true, index: true },
  title: "DIZETO | LINKS",
  twitter: {
    card: "summary_large_image",
    creator: "@dizeto_id",
    description: "Come visit social media connected to Dizeto.",
    images: {
      url: "https://dizeto.vercel.app/assets/images/logo/dizeto.webp",
    },
    site: "@dizeto_id",
    title: "DIZETO | LINKS",
  },
};

const Linkslayout: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  return children;
};

export default Linkslayout;
