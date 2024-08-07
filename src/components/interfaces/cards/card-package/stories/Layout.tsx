import { FC, ReactElement } from "react";

import { NextAuthProvider } from "@/src/libs/providers";

import { CardPackage } from "..";

const PRICING_DATA = {
  category: "EXAMPLE\nTEXT",
  id: "1",
  listItem: [
    {
      id: "1",
      list: [
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
        { label: "EXAMPLE TEXT", qty: 1 },
      ],
      pricingId: "1",
    },
  ],
  package: "A",
  price: 1000000,
};

const Layout: FC = (): ReactElement => (
  <div className="w-[400px]">
    <NextAuthProvider>
      <CardPackage data={PRICING_DATA} />
    </NextAuthProvider>
  </div>
);

export default Layout;
