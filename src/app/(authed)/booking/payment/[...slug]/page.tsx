import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import PaymentLayout from "@/src/layouts/payment";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "PAYMENT",
};

interface I {
  params: {
    slug: string[];
  };
}

const PaymentPage: FC<I> = (props): ReactElement => <PaymentLayout slug={props.params.slug} />;

export default PaymentPage;
