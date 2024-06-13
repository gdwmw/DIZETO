import { FC, ReactElement } from "react";

import { Button, TButton } from "..";

type T = Omit<TButton, "className">;

const Layout: FC<T> = ({ ...props }): ReactElement => {
  return (
    <Button disabled={props.disabled} {...props}>
      {props.children}
    </Button>
  );
};

export default Layout;
