import { FC, ReactElement } from "react";

import { Footer } from "@/src/components";

import { Main } from "./modules";

interface I {
  slug: string;
}

const PortfolioLayout: FC<I> = (props): ReactElement => (
  <>
    <Main slug={props.slug} />
    <Footer />
  </>
);

export default PortfolioLayout;
