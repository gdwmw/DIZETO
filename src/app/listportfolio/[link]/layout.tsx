import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

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
  title: "DIZETO | PORTFOLIO",
};

export default function Portfoliolayout({ children }: { children: React.ReactNode }): ReactNode {
  return children;
}
