"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Title } from "@/interfaces/title";
import { GETAbout, GETTitle } from "@/utils";

export const About: FC = (): ReactElement => {
  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataAbout } = useQuery({
    queryFn: GETAbout,
    queryKey: ["GETAbout"],
  });

  return (
    <ContainerPaper id="about">
      <ContentPaper>
        <Title title={dataTitle?.[0].title} titleRed={dataTitle?.[0].titleRed} />
        <div className="space-y-14 py-10 md:grid md:grid-cols-2 md:space-y-0">
          <div className="space-y-5">
            <h3 className="text-xl font-semibold sm:text-2xl">
              <span className="text-red-600">{dataAbout?.subTitle.slice(0, 1)}</span>
              {dataAbout?.subTitle.slice(1)}
            </h3>
            <p className="text-justify text-sm font-semibold sm:text-base">
              <span className="text-red-600">{dataAbout?.description.slice(0, 6)}</span>
              {dataAbout?.description.slice(6)}
            </p>
            <p className="pt-5 text-sm font-semibold text-red-600 sm:text-base">{dataAbout?.note}</p>
          </div>
          <div className="flex items-center justify-center">
            <Image alt="DIZETO" height={250} priority src={dataAbout?.logoUrl ?? ""} width={250} />
          </div>
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
