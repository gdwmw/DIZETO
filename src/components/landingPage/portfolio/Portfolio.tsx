import { dbLandingPage } from "@/database/database";
import LandingPage from "@/types/landingPage";
import dynamic from "next/dynamic";
import Link from "next/link";
const ImagesFrame = dynamic(() => import("./imagesFrame/ImagesFrame"));

type PortfolioProps = {
  data: LandingPage.LandingPageData;
};

export default function Portfolio({ data }: PortfolioProps) {
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

        {data.presetLandingPagePortfolio ? (
          <ImagesFrame
            folder="landingPage"
            database={dbLandingPage}
            link="https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/"
            copyright="© 2022 DIZETO. All rights reserved - TRUE / PRESET 2."
          />
        ) : (
          <ImagesFrame
            folder="landingPage"
            database={dbLandingPage}
            link="https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/"
            copyright="© 2022 DIZETO. All rights reserved."
          />
        )}
      </div>
    </section>
  );
}
