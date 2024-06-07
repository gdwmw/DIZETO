import type { Viewport } from "next";

import { FC, ReactNode } from "react";

export const viewport: Viewport = {
  initialScale: 0.5,
  width: "device-width",
};

const PortfolioListLayout: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  return children;
};

export default PortfolioListLayout;
