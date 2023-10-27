import LandingPage from "@/types/landingPage";
import PriceCard from "./priceCard/PriceCard";

type PricingProps = {
  data: LandingPage.LandingPageData;
  code: number;
};

export default function Pricing({ data, code }: PricingProps) {
  return (
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
  );
}
