"use client";

import LandingPage from "@/types/landingPage";
import { useSelector } from "react-redux";
import About from "./about/About";
import Contact from "./contact/Contact";
import Jumbotron from "./jumbotron/Jumbotron";
import Portfolio from "./portfolio/Portfolio";
import Pricing from "./pricing/Pricing";
import TestimonyClients from "./testimonyClients/TestimonyClients";

export default function Main({ result, preset }: { result: LandingPage.LandingPageData[]; preset: number }) {
  const code: number = useSelector((state: any) => state.lang.code);
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
