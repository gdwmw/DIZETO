import type { Metadata, Viewport } from "next";
import { FC, ReactNode } from "react";

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

const Portfoliolayout: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  return children;
};

export default Portfoliolayout;
