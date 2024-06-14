"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";

import { ContainerPaper, ContentPaper } from "@/components/interfaces/paper";
import { GETPricing, GETTitle } from "@/utils/api";

import { PriceCard } from "./price-card";

export const Pricing: FC = (): ReactElement => {
  const { data: title } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: pricing } = useQuery({
    queryFn: GETPricing,
    queryKey: ["GETPricing"],
  });

  return (
    <ContainerPaper id="Pricing">
      <ContentPaper>
        <h2 className="text-center text-3xl font-semibold">
          {title?.[2].title}
          <span className="text-red-600">{title?.[2].redTitle}</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <div className="mt-5 flex items-center justify-center">
          <PriceCard data={pricing ?? []} />
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
