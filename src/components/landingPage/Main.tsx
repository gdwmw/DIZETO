import About from "./about/About";
import Contact from "./contact/Contact";
import Jumbotron from "./jumbotron/Jumbotron";
import Portfolio from "./portfolio/Portfolio";
import Pricing from "./pricing/Pricing";
import TestimonyClients from "./testimonyClients/TestimonyClients";

// TODO Perbaiki alt image

// TODO Cek apakah masih ada yang pake require pada image yang tidak dynamic import

// TODO Cek quality image

// TODO Cek strategy image

// TODO Cek height width image

// TODO Perbaiki type data

export default function Main() {
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
