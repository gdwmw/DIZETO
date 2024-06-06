import { FC, ReactElement } from "react";

import Link from "next/link";

import { ButtonCVA } from "@/components";
import { dbLandingPagePortfolio } from "@/database/database";

import { ImagesFrame } from "./images-frame";

export const HightlightPortfolio: FC = (): ReactElement => {
  return (
    <section className="scroll-mt-[84px]" id="Portfolio">
      <div className="paper bg-white p-5 dark:bg-dark">
        <h2 className="text-center text-3xl font-semibold">
          HIGHLIGHT <span className="text-red-600">PORTFOLIO</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <div className="my-5 flex items-center justify-center">
          <Link className={ButtonCVA()} href={"/listportfolio"}>
            CHECK ALL PORTFOLIO
          </Link>
        </div>
        <ImagesFrame
          copyright="© 2022 DIZETO. All rights reserved."
          database={dbLandingPagePortfolio}
          folder="landing-page"
          link="https://dizeto-images.vercel.app/assets/images/landingPage/"
        />
      </div>
    </section>
  );
};
