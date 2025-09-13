import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs";

type TContainerPaper = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type TContentPaper = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ContainerPaper: FC<TContainerPaper> = ({ className, ...props }): ReactElement => (
  <section className={twm("scroll-mt-[84px]", className)} data-testid="container-paper" {...props}>
    {props.children}
  </section>
);

export const ContentPaper: FC<TContentPaper> = ({ className, ...props }): ReactElement => (
  <div
    className={twm(
      "overflow-hidden rounded-xl border border-black/50 bg-white p-5 shadow-md shadow-black/50 dark:border-white/50 dark:bg-dark dark:text-white dark:shadow-white/50",
      className,
    )}
    data-testid="content-paper"
    {...props}
  >
    {props.children}
  </div>
);
