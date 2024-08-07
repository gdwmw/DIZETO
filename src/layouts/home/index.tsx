import { FC, ReactElement } from "react";

import { getCookie } from "@/src/hooks/cookies";
import { getSession } from "@/src/hooks/session";

import { ASide, Footer, Header, Main, Nav } from "./modules";

const HomeLayout: FC = async (): Promise<ReactElement> => {
  const session = await getSession("status");
  const cookie = (await getCookie("theme"))?.value;

  return (
    <>
      <Header />
      <Nav authStatus={session} themeCookie={cookie} />
      <ASide authStatus={session} />
      <Main />
      <Footer />
    </>
  );
};

export default HomeLayout;
