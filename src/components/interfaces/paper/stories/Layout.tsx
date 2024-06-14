import { FC, ReactElement, ReactNode } from "react";

import { ContainerPaper, ContentPaper } from "..";

type TLayout = {
  children: ReactNode;
};

const Layout: FC<TLayout> = ({ ...props }): ReactElement => {
  return (
    <ContainerPaper>
      <ContentPaper>{props.children}</ContentPaper>
    </ContainerPaper>
  );
};

export default Layout;
