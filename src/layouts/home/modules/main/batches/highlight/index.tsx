"use client";

import { FC, ReactElement, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Link from "next/link";

import { ButtonTWM } from "@/interfaces/buttons/button";
import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Thumbnail } from "@/interfaces/thumbnail";
import { Title } from "@/interfaces/title";
import { GETHighlight } from "@/utils";
const ImageDetail = dynamic(() => import("@/interfaces/image-detail"));

export const Highlight: FC = (): ReactElement => {
  const { data } = useQuery({
    queryFn: GETHighlight,
    queryKey: ["GETHighlight"],
  });

  const [imageIndex, setImageIndex] = useState(0);
  const [openImageDetail, setOpenImageDetail] = useState(false);

  return (
    <ContainerPaper id="highlight">
      <ContentPaper>
        <Title title="HIGHLIGHT " titleRed="PORTFOLIO" />
        <div className="my-5 flex items-center justify-center">
          <Link className={ButtonTWM({ className: "font-semibold", color: "red", size: "sm", variant: "outline" })} href={"/portfoliolist"}>
            CHECK ALL PORTFOLIO
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {data?.imageFile.map((dt, index) => (
            <Thumbnail key={index} setImageIndex={() => setImageIndex(index)} setOpenImageDetail={setOpenImageDetail} src={dt.thumbnailUrl} />
          ))}
        </div>
        {openImageDetail && <ImageDetail data={data} imageIndex={imageIndex} setImageIndex={setImageIndex} setOpenImageDetail={setOpenImageDetail} />}
      </ContentPaper>
    </ContainerPaper>
  );
};
