"use client";

import { FC, ReactElement, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import dynamic from "next/dynamic";
import Image from "next/image";
import { BsBriefcaseFill, BsFillCircleFill, BsQuote } from "react-icons/bs";
import { FaEdit, FaThumbsUp } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

import { Button } from "@/src/components/interfaces/buttons/button";
import { ContainerPaper, ContentPaper } from "@/src/components/interfaces/paper";
import { GETCounting, GETTestimony } from "@/src/utils/api";
const TestimonyForm = dynamic(() => import("../forms/testimony-form"));

export const Testimony: FC = (): ReactElement => {
  const { data: dataTestimony } = useQuery({
    queryFn: GETTestimony,
    queryKey: ["GETTestimony"],
  });
  const { data: dataCounting } = useQuery({
    queryFn: GETCounting,
    queryKey: ["GETCounting"],
  });

  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [isEditTestimony, setIsEditTestimony] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFormattedTime(format(currentTime, "d MMMM yyyy, HH:mm:ss", { locale: enUS }));
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonyIndex((prevIndex) => (prevIndex + 1) % (dataTestimony?.length ?? 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [dataTestimony]);

  return (
    <>
      <ContainerPaper id="testimony">
        <ContentPaper className="relative bg-transparent dark:bg-transparent">
          <Button
            className="absolute right-3 top-3"
            color="black"
            onClick={() => {
              setOpenForm(true);
              setIsEditTestimony(true);
            }}
            size="sm"
            type="button"
            variant="ghost"
          >
            <FaEdit />
          </Button>

          <div className="mx-auto flex w-fit flex-col items-center justify-center gap-5 py-10 text-center font-semibold">
            <BsQuote size={50} />
            {dataTestimony?.map((dt, index) => (
              <div className={`space-y-5 ${testimonyIndex === index ? "" : "hidden"}`} key={dt.id}>
                <Image alt="Testimony" className="mx-auto rounded-full" height={128} loading="lazy" src={dt.imageURL} width={128} />
                <div>
                  <h3 className="text-xl">{dt.name}</h3>
                  <span className="text-sm text-red-600">{dt.event}</span>
                </div>
                <p className="flex h-[80px] items-center justify-center text-base sm:h-[50px] md:h-fit">&quot;{dt.comment}&quot;</p>
              </div>
            ))}
            <div className="mt-5 flex items-center justify-center gap-5">
              {dataTestimony?.map((dt, index) => (
                <BsFillCircleFill
                  className={`cursor-pointer ${testimonyIndex === index ? "text-red-600" : "text-red-300"}`}
                  key={dt.id}
                  onClick={() => setTestimonyIndex(index)}
                  size={11}
                />
              ))}
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-evenly gap-5 sm:flex-row">
            <Button className="absolute right-3 top-3" color="black" onClick={() => setOpenForm(true)} size="sm" type="button" variant="ghost">
              <FaEdit />
            </Button>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <HiUserGroup size={25} />
                <span className="text-xl font-bold text-red-600">{dataCounting?.[0]?.count}</span>
              </div>
              <span className="text-xl font-semibold">{dataCounting?.[0]?.title}</span>
            </div>

            <div className="hidden h-16 w-0.5 bg-black sm:block dark:bg-white" />
            <div className="h-0.5 w-16 bg-black sm:hidden dark:bg-white" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <FaThumbsUp size={20} />
                <span className="text-xl font-bold text-red-600">{dataCounting?.[1]?.count}</span>
              </div>
              <span className="text-xl font-semibold">{dataCounting?.[1]?.title}</span>
            </div>

            <div className="hidden h-16 w-0.5 bg-black sm:block dark:bg-white" />
            <div className="h-0.5 w-16 bg-black sm:hidden dark:bg-white" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <BsBriefcaseFill size={22} />
                <span className="text-xl font-bold text-red-600">{dataCounting?.[2]?.count}</span>
              </div>
              <span className="text-xl font-semibold">{dataCounting?.[2]?.title}</span>
            </div>

            <div className="hidden h-16 w-0.5 bg-black lg:block dark:bg-white" />

            <div className="hidden w-full max-w-[250px] text-center lg:block">
              <span className="text-xl font-bold text-red-600">{formattedTime || "## ## ####, ##:##:##"}</span>
              <br />
              <span className="text-xl font-semibold">Date - Time</span>
            </div>
          </div>
        </ContentPaper>
      </ContainerPaper>

      {openForm && (
        <TestimonyForm
          counting={dataCounting}
          data={dataTestimony}
          isEditTestimony={isEditTestimony}
          setIsEditTestimony={setIsEditTestimony}
          setOpenForm={setOpenForm}
        />
      )}
    </>
  );
};
