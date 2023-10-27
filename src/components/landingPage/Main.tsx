"use client";

// IMPORT TYPES
import LandingPage from "@/types/landingPage";

// IMPORT COMPONENTS
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

export default function Main({ result }: { result: LandingPage.LandingPageData[] }) {
  const preset: number = 0;
  const code: number = 0;
  const data = result[preset];
  return (
    <main>
      <Jumbotron />
      <section className="container mx-auto space-y-10 px-5">
        <About data={data} code={code} />
        <Portfolio data={data} />
        <Pricing data={data} code={code} />
        <TestimonyClients data={data.testimony} code={code} testimonyStatistics={data.testimonyStatistics} />
        <Contact />
      </section>
    </main>
  );
}
