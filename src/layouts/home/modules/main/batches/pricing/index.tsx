"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";

import { CardPackage } from "@/interfaces/cards/card-package";
import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Title } from "@/interfaces/title";
import { GETPricing, GETTitle } from "@/utils";

export const Pricing: FC = (): ReactElement => {
  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataPricing } = useQuery({
    queryFn: GETPricing,
    queryKey: ["GETPricing"],
  });

  return (
    <ContainerPaper id="pricing">
      <ContentPaper className="pb-7">
        <Title title={dataTitle?.[2].title} titleRed={dataTitle?.[2].titleRed} />
        <div className="mt-5 grid gap-5 sm:mt-0 sm:grid-cols-2 xl:grid-cols-4">
          {dataPricing?.map((dt, index) => <CardPackage key={index} {...dt} />)}
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
