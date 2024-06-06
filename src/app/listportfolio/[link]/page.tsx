import { FC, ReactElement } from "react";

import { Portfolio as Port } from "@/modules/portfolio";

const Portfolio: FC<{ params: { link: string } }> = ({ params }): ReactElement => {
  return <Port path={params.link} />;
};

export default Portfolio;
