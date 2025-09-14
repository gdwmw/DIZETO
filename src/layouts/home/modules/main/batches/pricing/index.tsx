"use client";

import { FC, ReactElement } from "react";

import { CardPackage, ContainerPaper, ContentPaper, Title } from "@/src/components";
import { PRICING_DATA } from "@/src/libs";

export const Pricing: FC = (): ReactElement => (
  <ContainerPaper id="pricing">
    <ContentPaper className="pb-7">
      <Title title={"PRICING"} />

      <div className="mt-5 grid gap-5 sm:mt-0 sm:grid-cols-2 xl:grid-cols-4">
        {PRICING_DATA?.map((dt) => (
          <CardPackage data={dt} href={"/unmaintained"} key={dt.id} />
        ))}
      </div>
    </ContentPaper>
  </ContainerPaper>
);
