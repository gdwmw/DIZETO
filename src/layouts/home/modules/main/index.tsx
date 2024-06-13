import { FC, ReactElement } from "react";

import { Copyright } from "@/components/copyright";

import { About, Contact, HightlightPortfolio, Jumbotron, Pricing, TestimonialsClients } from "./batches";

export const Main: FC = (): ReactElement => {
  return (
    <main>
      <Jumbotron />
      <section className="container mx-auto space-y-10 px-5">
        <About />
        <HightlightPortfolio />
        <Pricing />
        <TestimonialsClients />
        <Contact />
        <Copyright />
      </section>
    </main>
  );
};
