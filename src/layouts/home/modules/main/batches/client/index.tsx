"use client";

import { FC, ReactElement, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

import { Button } from "@/src/components/interfaces/button";
import { ContainerPaper, ContentPaper } from "@/src/components/interfaces/paper";
import { Title } from "@/src/components/interfaces/title";
import { GETClient, GETTitle } from "@/src/utils/api";
const ClientForm = dynamic(() => import("../forms/client-form"));

export const Client: FC = (): ReactElement => {
  const session = useSession();
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
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ContainerPaper id="client">
        <ContentPaper className="relative pb-10">
          {session.data?.user?.role === "admin" && (
            <Button className="absolute right-3 top-3" color="black" onClick={() => setOpenForm(true)} size="sm" type="button" variant="ghost">
              <FaEdit />
            </Button>
          )}

          <Title title={dataTitle?.[3].title} titleRed={dataTitle?.[3].titleRed} />

          <div className="mt-5 grid grid-cols-3 gap-5 xl:grid-cols-4">
            {/* TODO: Jangan lupa nanti bikin loading component */}
            {mounted &&
              dataClient?.map((dt) =>
                dt.theme === "both" ? (
                  <Link
                    className="flex size-full items-center justify-center opacity-70 hover:opacity-100"
                    href={dt.href}
                    key={dt.id}
                    target="_blank"
                  >
                    <Image alt={dt.alt} className="size-fit max-h-[120px]" height={120} loading="lazy" src={dt.logoURL} width={300} />
                  </Link>
                ) : dt.theme === theme.resolvedTheme ? (
                  <Link
                    className="flex size-full items-center justify-center opacity-70 hover:opacity-100"
                    href={dt.href}
                    key={dt.id}
                    target="_blank"
                  >
                    <Image alt={dt.alt} className="size-fit max-h-[120px]" height={120} loading="lazy" src={dt.logoURL} width={300} />
                  </Link>
                ) : null,
              )}
          </div>
        </ContentPaper>
      </ContainerPaper>

      {openForm && <ClientForm data={dataClient} setOpenForm={setOpenForm} title={dataTitle?.[3]} />}
    </>
  );
};
