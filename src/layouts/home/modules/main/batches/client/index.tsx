"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, useEffect, useState } from "react";

import { ContainerPaper, ContentPaper, Title } from "@/src/components";
import { CLIENT_DATA } from "@/src/libs";

export const Client: FC = (): ReactElement => {
  const theme = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ContainerPaper id="client">
      <ContentPaper className="pb-10">
        <Title title={"CLIENT"} />

        <div className="mt-5 grid grid-cols-3 gap-5 xl:grid-cols-4">
          {mounted &&
            CLIENT_DATA?.map((dt) =>
              dt.theme === "both" ? (
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
