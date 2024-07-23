import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs/tailwind-merge";

import { RedUnderline } from "../red-underline";

type TTitle = { className?: string; title: string | undefined; titleRed: string | undefined } & DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Title: FC<TTitle> = ({ className, title, titleRed, ...props }): ReactElement => {
  return (
    <>
      <h2 className={twm("text-center text-2xl font-semibold sm:text-3xl dark:text-white", className)} {...props} data-testid="title">
        {title}
        <span className="text-red-600">{titleRed}</span>
      </h2>
      <RedUnderline />
    </>
  );
};
