import { FC, ReactElement } from "react";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

import { ASide, Footer, Header, Main, Nav } from "./modules";

interface I {
  themeCookie: RequestCookie | undefined;
}

const HomeLayout: FC<I> = ({ themeCookie }): ReactElement => (
  <>
    <Header />
    <Nav themeCookie={themeCookie} />
    <ASide />
    <Main />
    <Footer />
  </>
);

export default HomeLayout;
