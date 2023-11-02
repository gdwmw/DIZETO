import Portfolio from "@/components/portfolio/Portfolio";

export default function Link({ params }: { params: { link: string } }) {
  return <Portfolio path={params.link} />;
}
