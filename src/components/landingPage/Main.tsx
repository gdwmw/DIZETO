"use client";
// IMPORT LIBRARIES
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaRegThumbsUp, FaToolbox, FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

// IMPORT COMPONENTS
import imgDIZETO from "@/assets/images/logo/dizeto.svg";
import { landingPage, testimony } from "@/database/database";
import ImagesFrame from "./imagesFrame/ImagesFrame";
import PriceCard from "./priceCard/PriceCard";

type PaperProps = {
  id: string;
  paperPadding: boolean;
  children: React.ReactNode;
};

// PAPER COMPONENTS
const Paper = ({ id, paperPadding, children }: PaperProps) => (
  <section id={id}>
    <div
      className={`h-fit w-full overflow-hidden rounded-xl border border-black/50 bg-white shadow-md shadow-black/50 dark:border-white/50 dark:bg-dark dark:text-white dark:shadow-white/50 ${
        paperPadding ? "p-5" : "p-0"
      }`}
    >
      {children}
    </div>
  </section>
);

export default function Main() {
  const [testimonyIndex, setTestimonyIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonyIndex((testimonyIndex + 1) % testimony.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonyIndex]);
  return (
    <main>
      {/* JUMBOTRON */}
      <section id="Jumbotron" className="container mx-auto flex h-[600px] w-full flex-col items-center justify-center gap-3 px-5 dark:text-white">
        <h1 className="text-8xl font-semibold">
          <span className="text-red-600">DI</span>ZETO
        </h1>
        <p className="text-xl font-semibold">PRODUCTION • ENTERTAINMENT • TALENT • MUSIC RECORD</p>
      </section>

      <section className="container mx-auto space-y-10 px-5">
        {/* ABOUT */}
        <Paper id="About" paperPadding={true}>
          <h2 className="text-center text-3xl font-semibold">
            ABO<span className="text-red-600">UT</span>
            <div className="mx-auto h-px w-20 bg-red-600" />
          </h2>

          <div className="my-10 space-y-14 md:grid md:grid-cols-2 md:space-y-0">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">
                <span className="text-red-600">W</span>hat is Dizeto?
              </h3>
              <p className="text-justify font-semibold">
                <span className="text-red-600">Dizeto</span> is a vendor that offers photography, videography, talent, and music services. We have a
                professional team that can help you meet business needs, events, and your special moments to make them more beautiful, real, and
                lasting. You can learn more about us by viewing our portfolio, YouTube channel, and customer testimonials.
              </p>
              <p className="pt-5 font-semibold text-red-600">*Please take note that we currently only offer photography and videography services.</p>
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <Image src={imgDIZETO} alt="DIZETO" height={250} width={250} />
            </div>
          </div>
        </Paper>

        {/* PORTFOLIO */}
        <Paper id="Portfolio" paperPadding={true}>
          <h2 className="text-center text-3xl font-semibold">
            PORTFOL<span className="text-red-600">IO</span>
            <div className="mx-auto h-px w-20 bg-red-600" />
          </h2>

          <div className="my-5 flex items-center justify-center">
            <Link href={"/"} className="border-2 border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white">
              CHECK ALL PORTFOLIO
            </Link>
          </div>

          <ImagesFrame
            folder="landingPage"
            database={landingPage}
            link="https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/"
            copyright="© 2022 DIZETO. All rights reserved."
          />
        </Paper>

        {/* PRICING */}
        <Paper id="Pricing" paperPadding={true}>
          <h2 className="text-center text-3xl font-semibold">
            PRICI<span className="text-red-600">NG</span>
            <div className="mx-auto h-px w-20 bg-red-600" />
          </h2>

          <div className="mt-5 flex items-center justify-center">
            <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <PriceCard />
            </div>
          </div>
        </Paper>

        {/* TESTIMONY */}
        <Paper id="Testimony" paperPadding={false}>
          <div className="flex h-[450px] w-full flex-col items-center justify-center gap-5 bg-white dark:bg-dark dark:text-white">
            <FaQuoteLeft size={30} />
            <Image
              src={require(`@/assets/images/testimony/${testimony[testimonyIndex].image}`)}
              alt="Image"
              height={128}
              width={128}
              loading="lazy"
              className="rounded-full"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{testimony[testimonyIndex].name}</h3>
              <p className="text-sm font-semibold text-red-600">{testimony[testimonyIndex].status}</p>
            </div>
            <p className="font-semibold">{`"${testimony[testimonyIndex].comment}"`}</p>
            <div className="mt-1 flex items-center justify-center gap-1">
              {testimony.map((_, index) => (
                <div key={index} className={testimonyIndex === index ? "text-red-600" : "text-red-300"}>
                  <GoDotFill size={25} />
                </div>
              ))}
            </div>
          </div>
        </Paper>
      </section>
    </main>
  );
}
