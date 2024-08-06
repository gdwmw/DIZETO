import { FC, HTMLAttributeAnchorTarget, PropsWithChildren, ReactElement } from "react";

import Link from "next/link";

import { twm } from "@/src/libs/tailwind-merge";

import { ButtonTWM } from "../interfaces/button";

type T = {
  className?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
} & Readonly<PropsWithChildren>;

const FloatingButtonTWM = (className?: string) =>
  twm(
    "fixed bottom-3 right-3 z-[2] size-fit min-h-12 min-w-12 animate-opacity rounded-full px-0 ring-1 ring-black hover:animate-none hover:bg-red-600 hover:ring-black active:bg-red-700 sm:bottom-10 sm:right-10 sm:min-h-14 sm:min-w-14 dark:ring-white dark:hover:ring-white",
    className,
  );

export const FloatingButton: FC<T> = (props): ReactElement => (
  <Link
    className={ButtonTWM({
      className: FloatingButtonTWM(props.className),
      color: "red",
      size: "sm",
      variant: "solid",
    })}
    href={props.href}
    target={props.target}
  >
    {props.children}
  </Link>
);
