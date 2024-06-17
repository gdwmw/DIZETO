import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/libs";

import { RedUnderline } from "../red-underline";

/* eslint-disable perfectionist/sort-union-types */
type TTitle = { className?: string; title: string; titleRed: string } & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
/* eslint-enable perfectionist/sort-union-types */

export const Title: FC<TTitle> = ({ className, title, titleRed, ...props }): ReactElement => {
  return (
    <h2 className={twm("text-center text-3xl font-semibold", className)} {...props}>
      {title}
      <span className="text-red-600">{titleRed}</span>
      <RedUnderline />
    </h2>
  );
};
