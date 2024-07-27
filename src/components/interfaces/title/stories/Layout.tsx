import { FC, ReactElement } from "react";

import { Title } from "..";

interface ILayout {
  title: string;
  titleRed: string;
}

const Layout: FC<ILayout> = (props): ReactElement => <Title title={props.title} titleRed={props.titleRed} />;

export default Layout;
