import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/libs";

import { RedUnderline } from "../red-underline";

type TTitle = { className?: string; title: string; titleRed: string } & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const Title: FC<TTitle> = ({ className, title, titleRed, ...props }): ReactElement => {
  return (
    <>
      <h2 className={twm("text-center text-3xl font-semibold", className)} {...props}>
        {title}
        <span className="text-red-600">{titleRed}</span>
      </h2>
      <RedUnderline />
    </>
  );
};
