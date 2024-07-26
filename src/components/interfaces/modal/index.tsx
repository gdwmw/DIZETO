import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs/tailwind-merge";

type TContainerModal = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type TContentModal = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Modal

export const ContainerModal: FC<TContainerModal> = ({ className, ...props }): ReactElement => (
  <section
    className={twm("fixed inset-0 z-[5] !mt-0 flex items-center justify-center px-5 backdrop-blur-md", className)}
    data-testid="container-modal"
    {...props}
  >
    {props.children}
  </section>
);

export const ContentModal: FC<TContentModal> = ({ className, ...props }): ReactElement => (
  <div
    className={twm("max-h-[95dvh] w-full overflow-auto rounded-xl border border-black bg-white p-5 dark:border-white dark:bg-dark", className)}
    data-testid="content-modal"
    {...props}
  >
    {props.children}
  </div>
);
