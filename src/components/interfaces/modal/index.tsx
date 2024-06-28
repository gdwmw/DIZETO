import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/libs";

type TContainerModal = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type TContentModal = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

// TODO: Jangan lupa nanti lanjutin bikin Unit Testing dan Storybook untuk Modal

export const ContainerModal: FC<TContainerModal> = ({ className, ...props }): ReactElement => {
  return (
    <section
      className={twm(
        "fixed left-0 top-0 z-[11] !mt-0 flex h-screen w-full items-center justify-center bg-black/50 p-5 backdrop-blur-md dark:bg-white/50",
        className,
      )}
      data-testid="container-modal"
      {...props}
    >
      {props.children}
    </section>
  );
};

export const ContentModal: FC<TContentModal> = ({ className, ...props }): ReactElement => {
  return (
    <div
      className={twm(
        "size-fit min-w-[500px] overflow-hidden rounded-xl border border-black/50 bg-white p-5 dark:border-white/50 dark:bg-dark",
        className,
      )}
      data-testid="content-modal"
      {...props}
    >
      {props.children}
    </div>
  );
};
