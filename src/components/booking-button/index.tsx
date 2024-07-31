import { FC, ReactElement } from "react";

import Link from "next/link";
import { PiCalendarDotsFill } from "react-icons/pi";

import { ButtonTWM } from "../interfaces/button";

export const BookingButton: FC = (): ReactElement => (
  <Link
    className={ButtonTWM({
      className:
        "fixed bottom-3 right-3 z-[2] size-fit min-h-12 min-w-12 animate-opacity rounded-full px-0 ring-1 ring-black hover:animate-none hover:bg-red-600 hover:ring-black active:bg-red-700 sm:bottom-10 sm:right-10 sm:min-h-14 sm:min-w-14 dark:ring-white dark:hover:ring-white",
      color: "red",
      size: "sm",
      variant: "solid",
    })}
    href={"/booking"}
  >
    <PiCalendarDotsFill size={30} />
  </Link>
);
