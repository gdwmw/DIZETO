import Portfolio from "@/components/portfolio/Portfolio";
import Footer from "@/components/Footer";

export default function Link({ params }: { params: { params: { link: string } } }) {
  return (
    <>
      <Portfolio path={params} />
      <Footer />
    </>
  );
}
