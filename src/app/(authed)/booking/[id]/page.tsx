import { FC, ReactElement } from "react";

import { Metadata, Viewport } from "next";

import BookingLayout from "@/src/layouts/booking";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "BOOKING",
};

interface I {
  params: {
    id: string;
  };
}

const BookingPage: FC<I> = (props): ReactElement => <BookingLayout id={props.params.id} />;

export default BookingPage;
