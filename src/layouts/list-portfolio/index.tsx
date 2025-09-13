import { FC, ReactElement } from "react";

import { Footer } from "@/src/components";

import { Main } from "./modules";

const ListPortfolioLayout: FC = (): ReactElement => (
  <>
    <Main />
    <Footer />
  </>
);

export default ListPortfolioLayout;
