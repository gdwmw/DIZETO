import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import RegisterLayout from "@/src/layouts/register";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage: FC = (): ReactElement => <RegisterLayout />;

export default RegisterPage;