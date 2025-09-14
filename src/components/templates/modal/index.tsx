import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs";

interface IContainerModal extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
}
interface IContentModal extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export const ContainerModal: FC<IContainerModal> = ({ className, ...props }): ReactElement => (
  <section
    className={twm("fixed inset-0 z-[5] !mt-0 flex items-center justify-center px-5 backdrop-blur-md", className)}
    data-testid="container-modal"
    {...props}
  >
    {props.children}
  </section>
);

export const ContentModal: FC<IContentModal> = ({ className, ...props }): ReactElement => (
  <div
    className={twm("max-h-[95dvh] w-full overflow-auto rounded-xl border border-black bg-white p-5 dark:border-white dark:bg-dark", className)}
    data-testid="content-modal"
    {...props}
  >
    {props.children}
  </div>
);
