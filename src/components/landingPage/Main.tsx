// IMPORT LIBRARIES
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

// IMPORT DATABASE
import { landingPage } from "@/database/database";

// IMPORT COMPONENTS
import logoDIZETO from "@/assets/images/logo/dizeto.svg";
import ImagesFrame from "./imagesFrame/ImagesFrame";
import PriceCard from "./priceCard/PriceCard";
import Testimony from "./testimony/Testimony";

// IMPORT TYPES
import LandingPage from "./landingPage";

async function Fetch() {
  const response = await fetch("https://6536584abb226bb85dd1f31f.mockapi.io/landingpage", { next: { revalidate: 0 } });
  return response.json();
}

export default async function Main() {
  const result: LandingPage.LandingPageData[] = await Fetch();
  const preset: number = 0;
  const code: number = 0;
  const data = result[preset];
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
                  <span className="text-red-600">{data.about.lang[code].titleRedTxt}</span>
                  {data.about.lang[code].title}
                </h3>
                <p className="text-justify font-semibold">
                  <span className="text-red-600">{data.about.lang[code].descRedTxt}</span> {data.about.lang[code].desc}
                </p>
                <p className="pt-5 font-semibold text-red-600">{data.about.lang[code].note}</p>
              </div>
              <div className="flex h-full w-full items-center justify-center">
                <Image src={logoDIZETO} alt="DIZETO" height={250} width={250} quality={50} priority={true} />
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

            {data.presetLandingPagePortfolio ? (
              <ImagesFrame
                folder="landingPage"
                database={landingPage}
                link="https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/"
                copyright="© 2022 DIZETO. All rights reserved - TRUE / PRESET 2."
              />
            ) : (
              <ImagesFrame
                folder="landingPage"
                database={landingPage}
                link="https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/"
                copyright="© 2022 DIZETO. All rights reserved."
              />
            )}
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
                <PriceCard pricing={data.pricing} code={code} />
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONY */}
        <Testimony testimony={data.testimony} code={code} testimonyStatistics={data.testimonyStatistics} />

        {/* CONTACT */}
        <section id="Contact" className="scroll-mt-[84px]">
          <div className="paper bg-white p-5 dark:bg-dark">
            <h2 className="text-center text-3xl font-semibold">
              CONTA<span className="text-red-600">CT</span>
              <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
            </h2>
            <iframe
              title="Google Maps"
              loading="lazy"
              className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.143343315141!2d107.6504268!3d-6.8863111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1697306682702!5m2!1sid!2sid"
            />
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
