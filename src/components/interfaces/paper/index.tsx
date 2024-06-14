import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/libs";

/* eslint-disable perfectionist/sort-union-types */
type TContainerPaper = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type TContentPaper = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
/* eslint-enable perfectionist/sort-union-types */

export const ContainerPaper: FC<TContainerPaper> = ({ className, ...props }): ReactElement => {
  return (
    <section className={twm("scroll-mt-[84px]", className)} data-testid="container-paper" {...props}>
      {props.children}
    </section>
  );
};

export const ContentPaper: FC<TContentPaper> = ({ className, ...props }): ReactElement => {
  return (
    <div className={twm("paper bg-white p-5 dark:bg-dark", className)} data-testid="content-paper" {...props}>
      {props.children}
    </div>
  );
};
