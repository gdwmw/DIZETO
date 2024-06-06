import type { Metadata, Viewport } from "next";

import { FC, ReactNode } from "react";

export const viewport: Viewport = {
  initialScale: 0.5,
  width: "device-width",
};

export const metadata: Metadata = {
  applicationName: "DIZETO",
  authors: { name: "Gede Dewo Wahyu M.W", url: "https://github.com/gdwmw" },
  creator: "Gede Dewo Wahyu M.W",
  publisher: "Vercel",
  robots: { follow: true, index: true },
  title: "DIZETO | PORTFOLIO",
};

const Portfoliolayout: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  return children;
};

export default Portfoliolayout;
