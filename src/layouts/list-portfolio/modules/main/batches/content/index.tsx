import Link from "next/link";
import { FC, PropsWithChildren, ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { ButtonTWM, ContainerPaper, ContentPaper } from "@/src/components";

type T = Readonly<PropsWithChildren>;

export const Content: FC<T> = (props): ReactElement => (
  <ContainerPaper>
    <ContentPaper className="space-y-5">
      <section className="flex items-center justify-center gap-5">
        <div className="size-fit">
          <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            PORTFOL<span className="text-red-600">IO</span>
          </h2>
          <p className="text-end text-xs font-semibold md:text-sm lg:text-base xl:text-lg">- DIZETO -</p>
        </div>

        <Link className={ButtonTWM({ className: "min-w-fit", color: "red", size: "sm", variant: "outline" })} href={"/"}>
          <FaArrowLeft size={18} />
        </Link>

        <div className="h-0.5 w-full rounded-full bg-red-600" />
      </section>

      <section className="flex items-start justify-center">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{props.children}</div>
      </section>
    </ContentPaper>
  </ContainerPaper>
);
