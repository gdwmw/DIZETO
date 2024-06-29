"use client";

import { FC, ReactElement, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Link from "next/link";

import { ButtonTWM } from "@/interfaces/buttons/button";
import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Thumbnail } from "@/interfaces/thumbnail";
import { Title } from "@/interfaces/title";
import { GETHighlight, GETTitle } from "@/utils";
const ImageDetail = dynamic(() => import("@/interfaces/image-detail"));

export const Highlight: FC = (): ReactElement => {
  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataHighlight } = useQuery({
    queryFn: GETHighlight,
    queryKey: ["GETHighlight"],
  });

  const [imageIndex, setImageIndex] = useState(0);
  const [openImageDetail, setOpenImageDetail] = useState(false);

  return (
    <ContainerPaper id="highlight">
      <ContentPaper>
        <Title title={dataTitle?.[1].title} titleRed={dataTitle?.[1].titleRed} />
        <div className="my-5 flex items-center justify-center">
          <Link
            className={ButtonTWM({ className: "text-sm font-semibold sm:text-base", color: "red", size: "sm", variant: "outline" })}
            href={"/portfoliolist"}
          >
            CHECK ALL PORTFOLIO
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {dataHighlight?.imageFile.map((dt, index) => (
            <Thumbnail key={index} setImageIndex={() => setImageIndex(index)} setOpenImageDetail={setOpenImageDetail} src={dt.thumbnailURL} />
          ))}
        </div>
        {openImageDetail && (
          <ImageDetail data={dataHighlight} imageIndex={imageIndex} setImageIndex={setImageIndex} setOpenImageDetail={setOpenImageDetail} />
        )}
      </ContentPaper>
    </ContainerPaper>
  );
};
