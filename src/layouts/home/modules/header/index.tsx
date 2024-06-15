import { FC, ReactElement } from "react";

import { Navbar } from "./batches";

export const Header: FC = (): ReactElement => {
  return (
    <header>
      <Navbar />
    </header>
  );
};
