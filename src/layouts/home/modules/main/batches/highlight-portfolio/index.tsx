"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { ContainerPaper, ContentPaper } from "@/components/interfaces/paper";
import { ButtonTWM } from "@/interfaces/buttons/button";
import { GETHighlight, GETTitle } from "@/utils/api";

import { ImagesFrame } from "./images-frame";

export const HightlightPortfolio: FC = (): ReactElement => {
  const { data: title } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: highlight } = useQuery({
    queryFn: GETHighlight,
    queryKey: ["GETHighlight"],
  });

  return (
    <ContainerPaper id="Portfolio">
      <ContentPaper>
        <h2 className="text-center text-3xl font-semibold">
          {title?.[1].title} <span className="text-red-600">{title?.[1].redTitle}</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <div className="my-5 flex items-center justify-center">
          <Link className={ButtonTWM({})} href={"/portfoliolist"}>
            CHECK ALL PORTFOLIO
          </Link>
        </div>
        <ImagesFrame
          copyright="© 2022 DIZETO. All rights reserved."
          database={highlight?.[0].imageFile ?? []}
          folder="landing-page"
          link={highlight?.[0].urlAssets ?? ""}
        />
      </ContentPaper>
    </ContainerPaper>
  );
};
