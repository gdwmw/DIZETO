import type { Metadata } from "next";

export const metadata: Metadata = {
  viewport: { width: "device-width", initialScale: 0.8 },
  creator: "Gede Dewo Wahyu M.W",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  applicationName: "DIZETO",
  publisher: "Vercel",
  robots: { index: true, follow: true },
  title: "DIZETO | LINKS",
};

export default function Linkslayout({ children }: { children: React.ReactNode }) {
  return children;
}
