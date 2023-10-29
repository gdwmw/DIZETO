import type { Metadata } from "next";

export const metadata: Metadata = {
  viewport: { width: "device-width", initialScale: 0.5 },
  creator: "Gede Dewo Wahyu M.W",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  applicationName: "DIZETO",
  publisher: "Vercel",
  robots: { index: true, follow: true },
  title: "DIZETO | CONTENT MANAGEMENT",
};

export default function ContentManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
