import { Portfolio as Port } from "@/modules/portfolio";
import { FC, ReactElement } from "react";

const Portfolio: FC<{ params: { link: string } }> = ({ params }): ReactElement => {
  return <Port path={params.link} />;
};

export default Portfolio;
