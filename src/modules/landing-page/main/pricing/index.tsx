import { FC, ReactElement } from "react";
import { PriceCard } from "./price-card";

export const Pricing: FC = (): ReactElement => {
  return (
    <section id="Pricing" className="scroll-mt-[84px]">
      <div className="paper bg-white p-5 dark:bg-dark">
        <h2 className="text-center text-3xl font-semibold">
          PRICI<span className="text-red-600">NG</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <div className="mt-5 flex items-center justify-center">
          <PriceCard />
        </div>
      </div>
    </section>
  );
};
