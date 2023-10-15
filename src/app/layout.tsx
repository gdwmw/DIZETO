import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextThemeProvider } from "@/nextTheme/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  viewport: { width: "device-width", initialScale: 0.5 },
  creator: "Gede Dewo Wahyu M.W",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  applicationName: "DIZETO",
  publisher: "Vercel",
  robots: { index: true, follow: true },
  title: "DIZETO | PROFESSIONAL SERVICES",
  description: "Dizeto is a vendor that offers photography, videography, talent, and music services.",
  keywords: "DIZETO, Photography, Videography, Talent, Music, Jasa Foto, Jasa Video, Bandung",
  metadataBase: new URL("https://dizeto-dev.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://dizeto-dev.vercel.app/",
    title: "DIZETO | PROFESSIONAL SERVICES",
    description: "Dizeto is a vendor that offers photography, videography, talent, and music services.",
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
    title: "DIZETO | PROFESSIONAL SERVICES",
    description: "Dizeto is a vendor that offers photography, videography, talent, and music services.",
    images: {
      url: "https://dizeto-dev.vercel.app/dizeto.svg",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
