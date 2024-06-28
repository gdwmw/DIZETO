import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/libs";

type TContainerModal = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type TContentModal = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Modal

export const ContainerModal: FC<TContainerModal> = ({ className, ...props }): ReactElement => {
  return (
    <section
      className={twm("fixed inset-0 z-[11] !mt-0 flex items-center justify-center bg-black/50 px-5 backdrop-blur-md dark:bg-white/50", className)}
      data-testid="container-modal"
      {...props}
    >
      {props.children}
    </section>
  );
};

export const ContentModal: FC<TContentModal> = ({ className, ...props }): ReactElement => {
  return (
    <div className={twm("max-h-[95dvh] w-full overflow-auto rounded-xl bg-white p-5 dark:bg-dark", className)} data-testid="content-modal" {...props}>
      {props.children}
    </div>
  );
};
