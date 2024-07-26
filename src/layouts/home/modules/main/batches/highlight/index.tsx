"use client";

import { FC, ReactElement, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

import { Button, ButtonTWM } from "@/src/components/interfaces/buttons/button";
import { ContainerPaper, ContentPaper } from "@/src/components/interfaces/paper";
import { Thumbnail } from "@/src/components/interfaces/thumbnail";
import { Title } from "@/src/components/interfaces/title";
import { GETHighlight, GETTitle } from "@/src/utils/api";
const ImageDetail = dynamic(() => import("@/src/components/interfaces/image-detail"));
const HighlightForm = dynamic(() => import("../forms/highlight-form"));

export const Highlight: FC = (): ReactElement => {
  const session = useSession();

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
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <ContainerPaper id="highlight">
        <ContentPaper className="relative">
          {session.data?.user.role === "admin" && (
            <Button className="absolute right-3 top-3" color="black" onClick={() => setOpenForm(true)} size="sm" type="button" variant="ghost">
              <FaEdit />
            </Button>
          )}

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
            {dataHighlight?.images.map((dt, index) => (
              <Thumbnail key={dt.id} setImageIndex={() => setImageIndex(index)} setOpenImageDetail={setOpenImageDetail} src={dt.thumbnailURL} />
            ))}
          </div>

          {openImageDetail && (
            <ImageDetail data={dataHighlight} imageIndex={imageIndex} setImageIndex={setImageIndex} setOpenImageDetail={setOpenImageDetail} />
          )}
        </ContentPaper>
      </ContainerPaper>

      {openForm && <HighlightForm data={dataHighlight} setOpenForm={setOpenForm} title={dataTitle?.[1]} />}
    </>
  );
};
