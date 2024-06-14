"use client";

import { FC, ReactElement, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaQuoteLeft, FaRegThumbsUp, FaToolbox, FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import { dbTestimonialsClients } from "@/database/database";
import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";
import aa from "@/public/assets/images/clients/aa.png";
import irma from "@/public/assets/images/clients/irma.png";
import kp from "@/public/assets/images/clients/kp.png";
import lcGray from "@/public/assets/images/clients/lc-gray.svg";
import lcWhite from "@/public/assets/images/clients/lc-white.svg";
import maGray from "@/public/assets/images/clients/ma-gray.svg";
import maWhite from "@/public/assets/images/clients/ma-white.svg";
import rbwGray from "@/public/assets/images/clients/rbw-gray.svg";
import rbwWhite from "@/public/assets/images/clients/rbw-white.svg";
import sk from "@/public/assets/images/clients/sk.png";
import { GETCounting, GETTestimony, GETTitle } from "@/utils/api";
const DateTime = dynamic(() => import("./date-time"));

export const TestimonialsClients: FC = (): ReactElement => {
  const { data: title } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: testimony } = useQuery({
    queryFn: GETTestimony,
    queryKey: ["GETTestimony"],
  });
  const { data: counting } = useQuery({
    queryFn: GETCounting,
    queryKey: ["GETCounting"],
  });

  const theme = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [testimonialsIndex, setTestimonialsIndex] = useState<number>(0);
  const [dateTime, setDateTime] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
    window.innerWidth < 1024 && setDateTime(false);
  }, []);

  useEffect(() => {
    const testimonialsInterval = setInterval(() => {
      setTestimonialsIndex((prevIndex) => (prevIndex + 1) % dbTestimonialsClients.length);
    }, 5000);
    return () => {
      clearInterval(testimonialsInterval);
    };
  }, []);

  return (
    <section className="scroll-mt-[84px]" id="Testimony">
      <div className="paper">
        <section>
          <div className="flex h-[450px] w-full flex-col items-center justify-center gap-5 dark:text-white">
            <FaQuoteLeft size={30} />
            <Image
              alt="Testimony"
              className="rounded-full"
              height={128}
              loading="lazy"
              quality={30}
              src={testimony?.[testimonialsIndex].urlImage ?? ""}
              width={128}
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{testimony?.[testimonialsIndex].name ?? ""}</h3>
              <p className="text-sm font-semibold text-red-600">{testimony?.[testimonialsIndex].event ?? ""}</p>
            </div>
            <p className="h-12 w-[500px] text-center font-semibold">{`"${testimony?.[testimonialsIndex].comment ?? ""}"`}</p>
            <div className="mt-1 flex items-center justify-center gap-1">
              {testimony?.map((_, index) => (
                <div className={testimonialsIndex === index ? "text-red-600" : "text-red-300"} key={index + "dot"}>
                  <GoDotFill size={25} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-32 w-full items-center justify-evenly bg-white/50 dark:bg-dark/50">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <FaRegThumbsUp size={25} />
                <p className="text-2xl font-bold text-red-600">{counting?.[0].count}</p>
              </div>
              <h4 className="text-xl font-semibold">{counting?.[0].title}</h4>
            </div>
            <div className="h-16 w-0.5 rounded-full bg-black dark:bg-white" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <FaToolbox size={25} />
                <p className="text-2xl font-bold text-red-600">{counting?.[1].count}</p>
              </div>
              <h4 className="text-xl font-semibold">{counting?.[1].title}</h4>
            </div>
            <div className="h-16 w-0.5 rounded-full bg-black dark:bg-white" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <FaUserAlt size={25} />
                <p className="text-2xl font-bold text-red-600">{counting?.[2].count}</p>
              </div>
              <h4 className="text-xl font-semibold">{counting?.[2].title}</h4>
            </div>
            {dateTime && <DateTime />}
          </div>
        </section>
        <section className="scroll-mt-[84px] bg-white py-14 dark:bg-dark" id="Clients">
          <h2 className="text-center text-3xl font-semibold">
            {title?.[3].title}
            <span className="text-red-600">{title?.[3].redTitle}</span>
            <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
          </h2>
          {mounted ? (
            <div className="mt-5 space-y-5">
              <div className="flex items-center justify-evenly">
                {theme.resolvedTheme === "light" && (
                  <a href="http://www.angklungmuhibah.id" rel="noopener noreferrer" target="_blank">
                    <Image alt="Muhibah Angklung" className="clients-img" loading="lazy" quality={30} src={maGray} />
                  </a>
                )}
                {theme.resolvedTheme === "light" && (
                  <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" rel="noopener noreferrer" target="_blank">
                    <Image alt="Rumah Batik Wijaya" className="clients-img" loading="lazy" quality={30} src={rbwGray} />
                  </a>
                )}
                {theme.resolvedTheme === "dark" && (
                  <a href="http://www.angklungmuhibah.id" rel="noopener noreferrer" target="_blank">
                    <Image alt="Muhibah Angklung" className="clients-img" loading="lazy" quality={30} src={maWhite} />
                  </a>
                )}
                {theme.resolvedTheme === "dark" && (
                  <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" rel="noopener noreferrer" target="_blank">
                    <Image alt="Rumah Batik Wijaya" className="clients-img" loading="lazy" quality={30} src={rbwWhite} />
                  </a>
                )}
                <a href="https://irmajabar.com/" rel="noopener noreferrer" target="_blank">
                  <Image alt="IRMA" className="clients-img" loading="lazy" quality={30} src={irma} />
                </a>
              </div>
              <div className="flex items-center justify-evenly">
                <a
                  href="https://shopee.co.id/topnapurnama?categoryId=100629&entryPoint=ShopByPDP&itemId=15208206609"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image alt="Kopi Purnama" className="clients-img" loading="lazy" quality={30} src={kp} />
                </a>
                <a href="https://gofood.link/a/DVoCLZN" rel="noopener noreferrer" target="_blank">
                  {theme.resolvedTheme === "light" && <Image alt="Lentera Coffee" className="clients-img" loading="lazy" quality={30} src={lcGray} />}
                  {theme.resolvedTheme === "dark" && <Image alt="Lentera Coffee" className="clients-img" loading="lazy" quality={30} src={lcWhite} />}
                </a>
                <a href="https://www.youtube.com/@vittosafiy748" rel="noopener noreferrer" target="_blank">
                  <Image alt="Safiy Kitchen" className="clients-img" loading="lazy" quality={30} src={sk} />
                </a>
                <a href="https://pesantrentahfidzashrmadani.wordpress.com/" rel="noopener noreferrer" target="_blank">
                  <Image alt="Al-'Ashr Al-Madani" className="clients-img" loading="lazy" quality={30} src={aa} />
                </a>
              </div>
            </div>
          ) : (
            <Image alt="Loading..." className="mx-auto my-20 h-auto" priority quality={30} src={loadingAnimation} width={100} />
          )}
        </section>
      </div>
    </section>
  );
};
