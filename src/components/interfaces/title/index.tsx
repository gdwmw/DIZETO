import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs/tailwind-merge";

import { RedUnderline } from "../red-underline";

type TTitle = {
  className?: string;
  redColor: number | undefined;
  title: string | undefined;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const Title: FC<TTitle> = ({ className, redColor, title, ...props }): ReactElement => (
  <>
    <h2 className={twm("text-center text-2xl font-semibold sm:text-3xl dark:text-white", className)} {...props} data-testid="title">
      {title?.slice(0, redColor)}
      <span className="text-red-600">{title?.slice(redColor)}</span>
    </h2>
    <RedUnderline />
  </>
);
