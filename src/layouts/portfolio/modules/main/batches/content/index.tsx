"use client";

import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, ReactElement } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { Button, ContainerPaper, ContentPaper, ImageDetail, PortfolioTitle } from "@/src/components";
import { useGlobalStates } from "@/src/context";
import { IPortfolioResponse } from "@/src/types";

interface I extends PropsWithChildren {
  data: IPortfolioResponse[];
}

export const Content: FC<I> = (props): ReactElement => {
  const router = useRouter();
  const { imageIndex, openImageDetail, setImageIndex, setOpenImageDetail } = useGlobalStates();

  return (
    <ContainerPaper>
      <ContentPaper>
        <section className="flex items-center justify-center gap-5">
          <PortfolioTitle date={props.data[0].date} title={props.data[0].title} />

          <Button className="min-w-fit" color="red" onClick={() => router.back()} size="sm" variant="outline">
            <FaArrowLeft size={18} />
          </Button>

          <div className="h-0.5 w-full rounded-full bg-red-600" />
        </section>

        <section className="flex items-start justify-center">
          <div className="columns-2 space-y-5 md:columns-3 lg:columns-4">{props.children}</div>
        </section>

        {openImageDetail && (
          <ImageDetail data={props.data} imageIndex={imageIndex} setImageIndex={setImageIndex} setOpenImageDetail={setOpenImageDetail} />
        )}
      </ContentPaper>
    </ContainerPaper>
  );
};
