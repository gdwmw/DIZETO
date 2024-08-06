import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import DashboardLayout from "@/src/layouts/dashboard";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "DASHBOARD",
};

const DashboardPage: FC = (): ReactElement => <DashboardLayout />;

export default DashboardPage;
