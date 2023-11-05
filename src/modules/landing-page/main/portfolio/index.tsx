import { dbLandingPagePortfolio } from "@/database/database";
import Link from "next/link";
import { ImagesFrame } from "./images-frame";
import { FC, ReactElement } from "react";

export const Portfolio: FC = (): ReactElement => {
  return (
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
          database={dbLandingPagePortfolio}
          link="https://dizeto-images.vercel.app/assets/images/landingPage/"
          copyright="© 2022 DIZETO. All rights reserved."
        />
      </div>
    </section>
  );
};
