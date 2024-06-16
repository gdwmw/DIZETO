import { FC, ReactElement } from "react";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

import { ASide, Footer, Header, Main } from "./modules";

type T = {
  themeCookie: RequestCookie | undefined;
};

export const HomeLayout: FC<T> = ({ themeCookie }): ReactElement => {
  return (
    <>
      <Header themeCookie={themeCookie} />
      <ASide />
      <Main />
      <Footer />
    </>
  );
};
