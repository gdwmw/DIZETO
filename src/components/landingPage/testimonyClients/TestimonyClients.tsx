"use client";

import irma from "@/assets/images/clients/irma.png";
import kp from "@/assets/images/clients/kp.png";
import lcGray from "@/assets/images/clients/lc-gray.svg";
import lcWhite from "@/assets/images/clients/lc-white.svg";
import maGray from "@/assets/images/clients/ma-gray.svg";
import maWhite from "@/assets/images/clients/ma-white.svg";
import rbwGray from "@/assets/images/clients/rbw-gray.svg";
import rbwWhite from "@/assets/images/clients/rbw-white.svg";
import sk from "@/assets/images/clients/sk.png";
import loadingAnimation from "@/assets/loading/loading.svg";
import { dbTestimonyClients } from "@/database/database";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaRegThumbsUp, FaToolbox, FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function TestimonyClients() {
  const theme = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [testimonyIndex, setTestimonyIndex] = useState<number>(0);
  const [dateTime, setDateTime] = useState<string>("00/00/0000 - 00:00:00");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const testimonyInterval = setInterval(() => {
      setTestimonyIndex((prevIndex) => (prevIndex + 1) % dbTestimonyClients.length);
    }, 5000);
    return () => {
      clearInterval(testimonyInterval);
    };
  }, []);

  useEffect(() => {
    const dateTimeInterval = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate
        .toLocaleString("id-ID", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(" ", "")
        .replace(",", " - ")
        .replace(".", ":")
        .replace(".", ":");

      setDateTime(formattedDate);
    }, 1000);

    window.innerWidth < 1024 && clearInterval(dateTimeInterval);

    return () => {
      clearInterval(dateTimeInterval);
    };
  }, []);

  return (
    <section id="Testimony" className="scroll-mt-[84px]">
      <div className="paper">
        <section>
          <div className="flex h-[450px] w-full flex-col items-center justify-center gap-5 dark:text-white">
            <FaQuoteLeft size={30} />
            <Image
              src={require(`@/assets/images/testimony/${dbTestimonyClients[testimonyIndex].image}`)}
              alt="Testimony"
              height={128}
              width={128}
              quality={30}
              loading="lazy"
              className="rounded-full"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{dbTestimonyClients[testimonyIndex].name}</h3>
              <p className="text-sm font-semibold text-red-600">{dbTestimonyClients[testimonyIndex].status}</p>
            </div>
            <p className="h-12 w-[500px] text-center font-semibold">{`"${dbTestimonyClients[testimonyIndex].comment}"`}</p>
            <div className="mt-1 flex items-center justify-center gap-1">
              {dbTestimonyClients.map((_, index) => (
                <div key={index} className={testimonyIndex === index ? "text-red-600" : "text-red-300"}>
                  <GoDotFill size={25} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-32 w-full items-center justify-evenly bg-white/50 dark:bg-dark/50">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <FaRegThumbsUp size={25} />
                <p className="text-2xl font-bold text-red-600">48</p>
              </div>
              <h4 className="text-xl font-semibold">Happy Client</h4>
            </div>
            <div className="h-16 w-0.5 rounded-full bg-black dark:bg-white" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <FaToolbox size={25} />
                <p className="text-2xl font-bold text-red-600">50</p>
              </div>
              <h4 className="text-xl font-semibold">Completed Projects</h4>
            </div>
            <div className="h-16 w-0.5 rounded-full bg-black dark:bg-white" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <FaUserAlt size={25} />
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
              <h4 className="text-xl font-semibold">Subscribers</h4>
            </div>
            <div className="hidden h-16 w-0.5 rounded-full bg-black dark:bg-white lg:block" />
            <div className="hidden flex-col items-center justify-center lg:flex">
              <p className="w-[250px] text-center text-xl font-bold text-red-600">{dateTime}</p>
              <h4 className="text-xl font-semibold">Date - Time</h4>
            </div>
          </div>
        </section>
        <section id="Clients" className="scroll-mt-[84px] bg-white py-14 dark:bg-dark">
          <h2 className="text-center text-3xl font-semibold">
            CLIENT<span className="text-red-600">S</span>
            <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
          </h2>
          {mounted ? (
            <div className="mt-5 space-y-5">
              <div className="flex items-center justify-evenly">
                {theme.resolvedTheme === "light" && (
                  <a href="http://www.angklungmuhibah.id" target="_blank" rel="noopener noreferrer">
                    <Image src={maGray} alt="Muhibah Angklung" quality={30} loading="lazy" className="clients-img" />
                  </a>
                )}
                {theme.resolvedTheme === "light" && (
                  <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" target="_blank" rel="noopener noreferrer">
                    <Image src={rbwGray} alt="Rumah Batik Wijaya" quality={30} loading="lazy" className="clients-img" />
                  </a>
                )}
                {theme.resolvedTheme === "dark" && (
                  <a href="http://www.angklungmuhibah.id" target="_blank" rel="noopener noreferrer">
                    <Image src={maWhite} alt="Muhibah Angklung" quality={30} loading="lazy" className="clients-img" />
                  </a>
                )}
                {theme.resolvedTheme === "dark" && (
                  <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" target="_blank" rel="noopener noreferrer">
                    <Image src={rbwWhite} alt="Rumah Batik Wijaya" quality={30} loading="lazy" className="clients-img" />
                  </a>
                )}
                <a href="https://irmajabar.com/" target="_blank" rel="noopener noreferrer">
                  <Image src={irma} alt="IRMA" quality={30} loading="lazy" className="clients-img" />
                </a>
              </div>
              <div className="flex items-center justify-evenly">
                <a
                  href="https://shopee.co.id/topnapurnama?categoryId=100629&entryPoint=ShopByPDP&itemId=15208206609"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={kp} alt="Kopi Purnama" quality={30} loading="lazy" className="clients-img" />
                </a>
                <a href="https://gofood.link/a/DVoCLZN" target="_blank" rel="noopener noreferrer">
                  {theme.resolvedTheme === "light" && <Image src={lcGray} alt="Lentera Coffee" quality={30} loading="lazy" className="clients-img" />}
                  {theme.resolvedTheme === "dark" && <Image src={lcWhite} alt="Lentera Coffee" quality={30} loading="lazy" className="clients-img" />}
                </a>
                <a href="https://www.youtube.com/@vittosafiy748" target="_blank" rel="noopener noreferrer">
                  <Image src={sk} alt="Safiy Kitchen" quality={30} loading="lazy" className="clients-img" />
                </a>
                <a href="https://pesantrentahfidzashrmadani.wordpress.com/" target="_blank" rel="noopener noreferrer">
                  {theme.resolvedTheme === "light" && (
                    <Image src={maGray} alt="Al-'Ashr Al-Madani" quality={30} loading="lazy" className="clients-img" />
                  )}
                  {theme.resolvedTheme === "dark" && (
                    <Image src={maWhite} alt="Al-'Ashr Al-Madani" quality={30} loading="lazy" className="clients-img" />
                  )}
                </a>
              </div>
            </div>
          ) : (
            <Image src={loadingAnimation} alt="Loading..." width={100} quality={30} priority className="mx-auto my-20 h-auto" />
          )}
        </section>
      </div>
    </section>
  );
}
