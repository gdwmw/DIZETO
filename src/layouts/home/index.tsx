import { FC, ReactElement } from "react";

import { Footer } from "@/interfaces/footer";

import { Header, Main } from "./modules";

export const HomeLayout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
