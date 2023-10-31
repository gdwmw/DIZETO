import Header from "@/components/landingPage/Header";
import Main from "@/components/landingPage/Main";
import Footer from "@/components/Footer";

async function Fetch() {
  const response = await fetch("https://6536584abb226bb85dd1f31f.mockapi.io/landingpage", { next: { revalidate: 0 } });
  return response.json();
}

async function Preset() {
  const response = await fetch("https://653fc4dd45bedb25bfc12e2f.mockapi.io/preset", { next: { revalidate: 0 } });
  return response.json();
}

export default async function page() {
  const preset = await Preset();
  return (
    <>
      <Header />
      <Main result={await Fetch()} preset={preset[0].preset} />
      <Footer />
    </>
  );
}
