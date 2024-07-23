import { FC, ReactElement } from "react";

import { Title } from "..";

type TLayout = {
  title: string;
  titleRed: string;
};

const Layout: FC<TLayout> = (props): ReactElement => {
  return <Title title={props.title} titleRed={props.titleRed} />;
};

export default Layout;
