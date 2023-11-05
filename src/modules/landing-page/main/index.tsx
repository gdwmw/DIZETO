import { FC, ReactElement } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Jumbotron } from "./jumbotron";
import { Portfolio } from "./portfolio";
import { Pricing } from "./pricing";
import { TestimonyClients } from "./testimony-clients";

export const Main: FC = (): ReactElement => {
  return (
    <main>
      <Jumbotron />
      <section className="container mx-auto space-y-10 px-5">
        <About />
        <Portfolio />
        <Pricing />
        <TestimonyClients />
        <Contact />
      </section>
    </main>
  );
}
