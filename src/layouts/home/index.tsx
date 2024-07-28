import { FC, ReactElement } from "react";

import { ASide, Footer, Header, Main, Nav } from "./modules";

interface I {
  themeCookie: string;
}

const HomeLayout: FC<I> = (props): ReactElement => (
  <>
    <Header />
    <Nav themeCookie={props.themeCookie} />
    <ASide />
    <Main />
    <Footer />
  </>
);

export default HomeLayout;
