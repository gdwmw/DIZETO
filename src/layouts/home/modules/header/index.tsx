import { FC, ReactElement } from "react";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

import { Navbar } from "./batches";

type T = {
  themeCookie: RequestCookie | undefined;
};

export const Header: FC<T> = async ({ themeCookie }): Promise<ReactElement> => {
  return (
    <header>
      <Navbar themeCookie={themeCookie} />
    </header>
  );
};
