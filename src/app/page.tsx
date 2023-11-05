import { Header, Main } from "@/modules/landing-page";
import { FC, ReactElement } from "react";

const LandingPage: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default LandingPage;
