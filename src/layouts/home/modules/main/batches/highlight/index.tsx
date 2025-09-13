"use client";

import Link from "next/link";
import { FC, PropsWithChildren, ReactElement } from "react";

import { ButtonTWM, ContainerPaper, ContentPaper, ImageDetail, RedUnderline } from "@/src/components";
import { useGlobalStates } from "@/src/context";
import { IHighlightResponse } from "@/src/types";

interface I extends PropsWithChildren {
  data: IHighlightResponse[];
}

export const Highlight: FC<I> = (props): ReactElement => {
  const { imageIndex, openImageDetail, setImageIndex, setOpenImageDetail } = useGlobalStates();

  return (
    <ContainerPaper id="highlight">
      <ContentPaper>
        <h2 className="text-center text-2xl font-semibold sm:text-3xl dark:text-white">
          HIGHLIGHT
          <span className="text-red-600"> PORTFOLIO</span>
        </h2>
        <RedUnderline />

        <div className="my-5 flex items-center justify-center">
          <Link
            className={ButtonTWM({ className: "text-sm font-semibold sm:text-base", color: "red", size: "sm", variant: "outline" })}
            href={"/list-portfolio"}
          >
            CHECK ALL PORTFOLIO
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">{props.children}</div>

        {openImageDetail && (
          <ImageDetail data={props.data} imageIndex={imageIndex} setImageIndex={setImageIndex} setOpenImageDetail={setOpenImageDetail} />
        )}
      </ContentPaper>
    </ContainerPaper>
  );
};
