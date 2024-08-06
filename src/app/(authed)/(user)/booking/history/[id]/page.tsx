import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import HistoryLayout from "@/src/layouts/booking/pages/history";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "HISTORY",
};

interface I {
  params: {
    id: string;
  };
}

const HistoryPage: FC<I> = (props): ReactElement => <HistoryLayout id={props.params.id} />;

export default HistoryPage;
