import { FC, ReactElement } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Jumbotron } from "./jumbotron";
import { Portfolio } from "./portfolio";
import { Pricing } from "./pricing";
import { TestimonialsClients } from "./testimonials-clients";

export const Main: FC = (): ReactElement => {
  return (
    <main>
      <Jumbotron />
      <section className="container mx-auto space-y-10 px-5">
        <About />
        <Portfolio />
        <Pricing />
        <TestimonialsClients />
        <Contact />
      </section>
    </main>
  );
};
