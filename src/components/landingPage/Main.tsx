// IMPORT LIBRARIES
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaRegThumbsUp, FaToolbox, FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

// IMPORT DATABASE
import { landingPage, testimony } from "@/database/database";

// IMPORT COMPONENTS
import ImagesFrame from "./imagesFrame/ImagesFrame";
import PriceCard from "./priceCard/PriceCard";
const DynamicGoogleMaps = dynamic(() => import("./googleMaps/GoogleMaps"), {
  ssr: false,
  loading: () => <div className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white" />,
});

export default function Main() {
  const [mounted, setMounted] = useState<boolean>(false);
  const theme = useTheme();
  const [testimonyIndex, setTestimonyIndex] = useState<number>(0);
  const [dateTime, setDateTime] = useState<string>("00/00/0000 - 00:00:00");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const testimonyInterval = setInterval(() => {
      setTestimonyIndex((prevIndex) => (prevIndex + 1) % testimony.length);
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

    return () => {
      clearInterval(dateTimeInterval);
    };
  }, []);
  return (
    <main>
      {/* JUMBOTRON */}
      <section id="Jumbotron" className="jumbotron">
        <h1 className="text-8xl font-semibold">
          <span className="text-red-600">DI</span>ZETO
        </h1>
        <p className="text-xl font-semibold">PRODUCTION • ENTERTAINMENT • TALENT • MUSIC RECORD</p>
      </section>

      <section className="container mx-auto space-y-10 px-5">
        {/* ABOUT */}
        <section id="About" className="scroll-mt-[84px]">
          <div className="paper bg-white p-5 dark:bg-dark">
            <h2 className="text-center text-3xl font-semibold">
              ABO<span className="text-red-600">UT</span>
              <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
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
                <p className="pt-5 font-semibold text-red-600">
                  *Please take note that we currently only offer photography and videography services.
                </p>
              </div>
              <div className="flex h-full w-full items-center justify-center">
                <Image src={require("@/assets/images/logo/dizeto.svg")} alt="DIZETO" height={250} width={250} quality={50} priority={true} />
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="Portfolio" className="scroll-mt-[84px]">
          <div className="paper bg-white p-5 dark:bg-dark">
            <h2 className="text-center text-3xl font-semibold">
              PORTFOL<span className="text-red-600">IO</span>
              <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
            </h2>

            <div className="my-5 flex items-center justify-center">
              <Link href={"/listportfolio"} className="red-line-button">
                CHECK ALL PORTFOLIO
              </Link>
            </div>

            <ImagesFrame
              folder="landingPage"
              database={landingPage}
              link="https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/"
              copyright="© 2022 DIZETO. All rights reserved."
            />
          </div>
        </section>

        {/* PRICING */}
        <section id="Pricing" className="scroll-mt-[84px]">
          <div className="paper bg-white p-5 dark:bg-dark">
            <h2 className="text-center text-3xl font-semibold">
              PRICI<span className="text-red-600">NG</span>
              <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
            </h2>

            <div className="mt-5 flex items-center justify-center">
              <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <PriceCard />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONY */}
        <section id="Testimony" className="scroll-mt-[84px]">
          <div className="paper">
            <div className="flex h-[450px] w-full flex-col items-center justify-center gap-5 dark:text-white">
              <FaQuoteLeft size={30} />

              <Image
                src={require(`@/assets/images/testimony/${testimony[testimonyIndex].image}`)}
                alt="Image"
                height={128}
                width={128}
                quality={50}
                className="rounded-full"
              />

              <div className="text-center">
                <h3 className="text-lg font-semibold">{testimony[testimonyIndex].name}</h3>
                <p className="text-sm font-semibold text-red-600">{testimony[testimonyIndex].status}</p>
              </div>

              <p className="h-12 w-[500px] text-center font-semibold">{`"${testimony[testimonyIndex].comment}"`}</p>

              <div className="mt-1 flex items-center justify-center gap-1">
                {testimony.map((_, index) => (
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
                <h4 className="text-xl font-semibold">Subscriber</h4>
              </div>

              <div className="hidden h-16 w-0.5 rounded-full bg-black dark:bg-white lg:block" />

              <div className="hidden flex-col items-center justify-center lg:flex">
                <p className="w-[250px] text-center text-xl font-bold text-red-600">{dateTime}</p>
                <h4 className="text-xl font-semibold">Date - Time</h4>
              </div>
            </div>

            {/* CLIENTS */}
            <div id="Clients" className="scroll-mt-[84px] bg-white py-14 dark:bg-dark">
              <h2 className="text-center text-3xl font-semibold">
                CLIEN<span className="text-red-600">TS</span>
                <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
              </h2>

              {mounted ? (
                <div className="mt-5 space-y-5">
                  <div className="flex items-center justify-evenly">
                    {theme.resolvedTheme === "light" && (
                      <a href="http://www.angklungmuhibah.id" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={require("@/assets/images/clients/ma-gray.svg")}
                          alt="Muhibah Angklung"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      </a>
                    )}
                    {theme.resolvedTheme === "light" && (
                      <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={require("@/assets/images/clients/rbw-gray.svg")}
                          alt="Rumah Batik Wijaya"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      </a>
                    )}
                    {theme.resolvedTheme === "dark" && (
                      <a href="http://www.angklungmuhibah.id" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={require("@/assets/images/clients/ma-white.svg")}
                          alt="Muhibah Angklung"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      </a>
                    )}
                    {theme.resolvedTheme === "dark" && (
                      <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" target="_blank" rel="noopener noreferrer">
                        <Image
                          src={require("@/assets/images/clients/rbw-white.svg")}
                          alt="Rumah Batik Wijaya"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      </a>
                    )}
                    <a href="https://irmajabar.com/" target="_blank" rel="noopener noreferrer">
                      <Image src={require("@/assets/images/clients/irma.png")} alt="IRMA" quality={50} loading="lazy" className="clients-img" />
                    </a>
                  </div>
                  <div className="flex items-center justify-evenly">
                    <a
                      href="https://shopee.co.id/topnapurnama?categoryId=100629&entryPoint=ShopByPDP&itemId=15208206609"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={require("@/assets/images/clients/kp.png")} alt="Kopi Purnama" quality={50} loading="lazy" className="clients-img" />
                    </a>
                    <a href="https://gofood.link/a/DVoCLZN" target="_blank" rel="noopener noreferrer">
                      {theme.resolvedTheme === "light" && (
                        <Image
                          src={require("@/assets/images/clients/lc-gray.svg")}
                          alt="Lentera Coffee"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      )}
                      {theme.resolvedTheme === "dark" && (
                        <Image
                          src={require("@/assets/images/clients/lc-white.svg")}
                          alt="Lentera Coffee"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      )}
                    </a>
                    <a href="https://www.youtube.com/@vittosafiy748" target="_blank" rel="noopener noreferrer">
                      <Image
                        src={require("@/assets/images/clients/sk.png")}
                        alt="Safiy Kitchen"
                        quality={50}
                        loading="lazy"
                        className="clients-img"
                      />
                    </a>
                    <a href="https://pesantrentahfidzashrmadani.wordpress.com/" target="_blank" rel="noopener noreferrer">
                      {theme.resolvedTheme === "light" && (
                        <Image
                          src={require("@/assets/images/clients/ma-gray.svg")}
                          alt="Al-'Ashr Al-Madani"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      )}
                      {theme.resolvedTheme === "dark" && (
                        <Image
                          src={require("@/assets/images/clients/ma-white.svg")}
                          alt="Al-'Ashr Al-Madani"
                          quality={50}
                          loading="lazy"
                          className="clients-img"
                        />
                      )}
                    </a>
                  </div>
                </div>
              ) : (
                <Image src={require("@/assets/loading/loading.svg")} alt="Loading" width={100} quality={50} className="mx-auto mt-14" />
              )}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="Contact" className="scroll-mt-[84px]">
          <div className="paper bg-white p-5 dark:bg-dark">
            <h2 className="text-center text-3xl font-semibold">
              CONTA<span className="text-red-600">CT</span>
              <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
            </h2>

            <DynamicGoogleMaps />

            <ul className="space-y-2 dark:text-white">
              <li className="flex gap-2">
                <div className="min-h-fit min-w-fit">
                  <MdLocationOn size={20} />
                </div>
                <p className="font-bold">Address:</p>
                <a
                  href="https://www.google.com/search?q=dizeto&oq=dizeto&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGKIEMgcIAhAAGKIEMgcIAxAAGKIEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRhAMgYIBxBFGDwyBggIEEUYPNIBCDQwMzlqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  Blk. A-B No.a8, Cibeunying, Kec. Cimenyan, Kabupaten Bandung, Jawa Barat 40191, Indonesia
                </a>
              </li>
              <li className="flex gap-2">
                <div className="min-h-fit min-w-fit">
                  <MdEmail size={20} />
                </div>
                <p className="font-bold">Email:</p>
                <a
                  href="https://mail.google.com/mail/u/?authuser=dizetobs@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  dizetobs@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <div className="min-h-fit min-w-fit">
                  <MdPhone size={20} />
                </div>
                <p className="font-bold">Phone:</p>
                <a href="/" className="hover:text-red-600">
                  +62 000-0000-0000
                </a>
              </li>
              <li className="flex gap-2">
                <div className="min-h-fit min-w-fit">
                  <TbWorldWww size={20} />
                </div>
                <p className="font-bold">Website:</p>
                <a href="https://dizeto.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                  https://dizeto.vercel.app/
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
