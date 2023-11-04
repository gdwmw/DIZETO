import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.8,
};

export const metadata: Metadata = {
  creator: "Gede Dewo Wahyu M.W",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  applicationName: "DIZETO",
  publisher: "Vercel",
  robots: { index: true, follow: true },
  title: "DIZETO | LINKS",
  description: "Come visit social media connected to Dizeto.",
  metadataBase: new URL("https://dizeto-dev.vercel.app/"),
  openGraph: {
    type: "website",
    url: "https://dizeto-dev.vercel.app/",
    title: "DIZETO | LINKS",
    description: "Come visit social media connected to Dizeto.",
    siteName: "DIZETO",
    images: [
      {
        url: "https://dizeto-dev.vercel.app/dizeto.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dizeto_id",
    creator: "@dizeto_id",
    title: "DIZETO | LINKS",
    description: "Come visit social media connected to Dizeto.",
    images: {
      url: "https://dizeto-dev.vercel.app/dizeto.svg",
    },
  },
};

export default function Linkslayout({ children }: { children: React.ReactNode }): ReactNode {
  return children;
}
