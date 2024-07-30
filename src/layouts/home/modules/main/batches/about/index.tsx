"use client";

import { FC, ReactElement, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";

import { Button } from "@/src/components/interfaces/buttons/button";
import { ContainerPaper, ContentPaper } from "@/src/components/interfaces/paper";
import { Title } from "@/src/components/interfaces/title";
import { GETAbout, GETTitle } from "@/src/utils/api";
const AboutForm = dynamic(() => import("../forms/about-form"));

export const About: FC = (): ReactElement => {
  const session = useSession();

  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataAbout } = useQuery({
    queryFn: GETAbout,
    queryKey: ["GETAbout"],
  });

  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <ContainerPaper id="about">
        <ContentPaper className="relative">
          {session.data?.user?.role === "admin" && (
            <Button className="absolute right-3 top-3" color="black" onClick={() => setOpenForm(true)} size="sm" type="button" variant="ghost">
              <FaEdit />
            </Button>
          )}

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
              <Image alt="DIZETO" height={250} priority src={dataAbout?.logoURL ?? ""} width={250} />
            </div>
          </div>
        </ContentPaper>
      </ContainerPaper>

      {openForm && <AboutForm data={dataAbout} setOpenForm={setOpenForm} title={dataTitle?.[0]} />}
    </>
  );
};
