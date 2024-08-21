import { FC, ReactElement } from "react";

import { Title } from "..";

interface ILayout {
  redColor: number;
  title: string;
}

const Layout: FC<ILayout> = (props): ReactElement => <Title redColor={props.redColor} title={props.title} />;

export default Layout;
