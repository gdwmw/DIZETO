import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs";

import { RedUnderline } from "../red-underline";

type TTitle = {
  className?: string;
  title: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const Title: FC<TTitle> = ({ className, title, ...props }): ReactElement => {
  const titleLength = title.length;

  return (
    <>
      <h2 className={twm("text-center text-2xl font-semibold sm:text-3xl dark:text-white", className)} {...props} data-testid="title">
        {title?.slice(0, titleLength - 2)}
        <span className="text-red-600">{title?.slice(titleLength - 2)}</span>
      </h2>
      <RedUnderline />
    </>
  );
};
