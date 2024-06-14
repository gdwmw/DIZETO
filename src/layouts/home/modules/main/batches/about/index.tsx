"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { ContainerPaper, ContentPaper } from "@/components/interfaces/paper";
import { GETAbout, GETTitle } from "@/utils/api";

export const About: FC = (): ReactElement => {
  const { data: title } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: about } = useQuery({
    queryFn: GETAbout,
    queryKey: ["GETAbout"],
  });

  return (
    <ContainerPaper id="About">
      <ContentPaper>
        <h2 className="text-center text-3xl font-semibold">
          {title?.[0].title}
          <span className="text-red-600">{title?.[0].redTitle}</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <div className="my-10 space-y-14 md:grid md:grid-cols-2 md:space-y-0">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">
              <span className="text-red-600">{about?.[0].subTitle.slice(0, 1)}</span>
              {about?.[0].subTitle.slice(1)}
            </h3>
            <p className="text-justify font-semibold">
              <span className="text-red-600">{about?.[0].description.slice(0, 6)}</span>
              {about?.[0].description.slice(6)}
            </p>
            <p className="pt-5 font-semibold text-red-600">{about?.[0].note}</p>
          </div>
          <div className="flex size-full items-center justify-center">
            <Image alt="DIZETO" height={250} priority src={about?.[0].urlLogo ?? ""} width={250} />
          </div>
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
