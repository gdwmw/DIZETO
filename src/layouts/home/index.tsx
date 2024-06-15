import { FC, ReactElement } from "react";

import { ASide, Footer, Header, Main } from "./modules";

export const HomeLayout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <ASide />
      <Main />
      <Footer />
    </>
  );
};
