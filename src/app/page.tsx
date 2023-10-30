import Header from "@/components/landingPage/Header";
import Main from "@/components/landingPage/Main";
import Footer from "@/components/Footer";

async function Fetch() {
  const response = await fetch("https://6536584abb226bb85dd1f31f.mockapi.io/landingpage", { next: { revalidate: 0 } });
  return response.json();
}

export default async function page() {
  return (
    <>
      <Header />
      <Main result={await Fetch()} />
      <Footer />
    </>
  );
}
