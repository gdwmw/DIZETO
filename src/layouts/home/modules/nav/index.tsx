import { FC, ReactElement } from "react";

import { getCookie } from "@/src/hooks";

import { Content } from "./batches";

export const Nav: FC = async (): Promise<ReactElement> => {
  const cookie = (await getCookie("theme"))?.value;

  return <Content themeCookie={cookie} />;
};
