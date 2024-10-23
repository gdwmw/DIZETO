"use client";

import { FC, ReactElement, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";

import { Button } from "@/src/components/interfaces/button";
import { ContainerPaper, ContentPaper } from "@/src/components/interfaces/paper";
import { Title } from "@/src/components/interfaces/title";
import { GETAbout } from "@/src/utils/api";
const AboutForm = dynamic(() => import("../forms/about-form"));

export const About: FC = (): ReactElement => {
  const session = useSession();
  const [openForm, setOpenForm] = useState(false);

  const { data } = useQuery({
    queryFn: GETAbout,
    queryKey: ["GETAbout"],
  });

  return (
    <>
      <ContainerPaper id="about">
        <ContentPaper className="relative">
          {session.data?.user?.role === "admin" && (
            <Button className="absolute right-3 top-3" color="black" onClick={() => setOpenForm(true)} size="sm" type="button" variant="ghost">
              <FaEdit />
            </Button>
          )}

          <Title redColor={data?.redColor} title={data?.title} />

          <div className="space-y-14 py-10 md:grid md:grid-cols-2 md:space-y-0">
            <div className="space-y-5">
              <h3 className="text-xl font-semibold sm:text-2xl">
                <span className="text-red-600">{data?.subTitle.slice(0, data.redColorSub)}</span>
                {data?.subTitle.slice(data.redColorSub)}
              </h3>
              <p className="text-justify text-sm font-semibold sm:text-base">
                <span className="text-red-600">{data?.description.slice(0, data.redColorDesc)}</span>
                {data?.description.slice(data.redColorDesc)}
              </p>
              <p className="pt-5 text-sm font-semibold text-red-600 sm:text-base">{data?.note}</p>
            </div>
            <div className="flex items-center justify-center">
              <Image alt="LOGO" height={250} priority src={data?.image.url ?? ""} width={250} />
            </div>
          </div>
        </ContentPaper>
      </ContainerPaper>

      {openForm && <AboutForm data={data} setOpenForm={setOpenForm} />}
    </>
  );
};
