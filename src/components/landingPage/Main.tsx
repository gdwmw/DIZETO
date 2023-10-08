// IMPORT LIBRARIES
import Image from "next/image";
import Link from "next/link";

// IMPORT COMPONENTS
import imgDIZETO from "@/assets/images/logo/dizeto.svg";
import { landingPage } from "@/database/database";
import ImagesFrame from "./imagesFrame/ImagesFrame";

type PaperProps = {
  id: string;
  children: React.ReactNode;
};

// PAPER COMPONENTS
const Paper = ({ id, children }: PaperProps) => (
  <section id={id}>
    <div className="h-fit w-full rounded-xl border border-black/50 bg-white p-5 shadow-md shadow-black/50 dark:border-white/50 dark:bg-dark dark:text-white dark:shadow-white/50">
      {children}
    </div>
  </section>
);

export default function Main() {
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
        <Paper id="About">
          <h2 className="text-center text-3xl font-semibold">
            ABO<span className="text-red-600">UT</span>
            <div className="mx-auto h-px w-20 bg-red-600" />
          </h2>

          <div className="my-10 space-y-14 md:grid md:grid-cols-2 md:space-y-0">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">
                <span className="text-red-600">W</span>hat is Dizeto?
              </h3>
              <p className="text-justify">
                <span className="text-red-600">Dizeto</span> is a vendor that offers photography, videography, talent, and music services. We have a
                professional team that can help you meet business needs, events, and your special moments to make them more beautiful, real, and
                lasting. You can learn more about us by viewing our portfolio, YouTube channel, and customer testimonials.
              </p>
              <p className="pt-5 text-red-600">*Please take note that we currently only offer photography and videography services.</p>
            </div>
            <div className="flex h-full w-full items-center justify-center">
              <Image src={imgDIZETO} alt="DIZETO" height={250} width={250} />
            </div>
          </div>
        </Paper>

        {/* PORTFOLIO */}
        <Paper id="Portfolio">
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
            copyright="© Copyright 2022 - DIZETO"
          />
        </Paper>
      </section>
    </main>
  );
}
