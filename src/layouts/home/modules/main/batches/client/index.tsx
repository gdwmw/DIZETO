"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Title } from "@/interfaces/title";
import { GETClient } from "@/utils/api/client";

export const Client: FC = (): ReactElement => {
  const theme = useTheme();

  const { data } = useQuery({
    queryFn: GETClient,
    queryKey: ["GETClient"],
  });

  return (
    <ContainerPaper id="client">
      <ContentPaper>
        <Title title="CLIE" titleRed="NT" />
        <div className="mt-5 grid grid-cols-3 gap-5 xl:grid-cols-4">
          {data?.map((dt, index) =>
            dt.theme === "" ? (
              <Link className="flex size-full items-center justify-center opacity-70 hover:opacity-100" href={dt.href} key={index} target="_blank">
                <Image alt={dt.alt} className="size-fit max-h-[120px]" height={120} src={dt.logoUrl} width={300} />
              </Link>
            ) : dt.theme === theme.resolvedTheme ? (
              <Link className="flex size-full items-center justify-center opacity-70 hover:opacity-100" href={dt.href} key={index} target="_blank">
                <Image alt={dt.alt} className="size-fit max-h-[120px]" height={120} src={dt.logoUrl} width={300} />
              </Link>
            ) : null,
          )}
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
