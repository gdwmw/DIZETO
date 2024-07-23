import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import LoginLayout from "@/src/layouts/login";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage: FC = (): ReactElement => {
  return <LoginLayout />;
};

export default LoginPage;
