import { FC, ReactElement } from "react";

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
  pack: "A",
  price: "1.0",
};

const Layout: FC = (): ReactElement => (
  <div className="w-[400px]">
    <CardPackage {...PRICING_DATA} />
  </div>
);

export default Layout;
