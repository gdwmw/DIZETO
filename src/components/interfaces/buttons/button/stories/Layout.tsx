import { FC, ReactElement } from "react";

import { Button, TButton } from "..";

type T = Omit<TButton, "className">;

const Layout: FC<T> = ({ ...props }): ReactElement => {
  return (
    <Button color={props.color} disabled={props.disabled} size={props.size} variant={props.variant} {...props}>
      {props.children}
    </Button>
  );
};

export default Layout;
