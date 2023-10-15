"use client";

// IMPORT COMPONENTS
import Header from "@/components/landingPage/Header";
import Main from "@/components/landingPage/Main";
import Footer from "@/components/landingPage/Footer";

export default function page() {
  return (
    <>
      <div className="background-gradient-animation" />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
