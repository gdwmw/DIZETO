import { FC, ReactElement } from "react";

import { Navbar } from "./navbar";

export const Header: FC = (): ReactElement => {
  return (
    <header id="Top">
      <Navbar />
    </header>
  );
};
