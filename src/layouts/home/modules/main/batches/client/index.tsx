"use client";

import { FC, ReactElement, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Title } from "@/interfaces/title";
import { GETClient, GETTitle } from "@/utils";

export const Client: FC = (): ReactElement => {
  const theme = useTheme();

  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataClient } = useQuery({
    queryFn: GETClient,
    queryKey: ["GETClient"],
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ContainerPaper id="client">
      <ContentPaper>
        <Title title={dataTitle?.[3].title} titleRed={dataTitle?.[3].titleRed} />
        <div className="mt-5 grid grid-cols-3 gap-5 xl:grid-cols-4">
          {/* TODO: Jangan lupa nanti bikin loading component */}
          {mounted &&
            dataClient?.map((dt) =>
              dt.theme === "" ? (
                <Link className="flex size-full items-center justify-center opacity-70 hover:opacity-100" href={dt.href} key={dt.id} target="_blank">
                  <Image alt={dt.alt} className="size-fit max-h-[120px]" height={120} loading="lazy" src={dt.logoURL} width={300} />
                </Link>
              ) : dt.theme === theme.resolvedTheme ? (
                <Link className="flex size-full items-center justify-center opacity-70 hover:opacity-100" href={dt.href} key={dt.id} target="_blank">
                  <Image alt={dt.alt} className="size-fit max-h-[120px]" height={120} loading="lazy" src={dt.logoURL} width={300} />
                </Link>
              ) : null,
            )}
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
