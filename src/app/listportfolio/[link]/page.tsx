import { Portfolio } from "@/modules/portfolio";

export default function Link({ params }: { params: { link: string } }): JSX.Element {
  return <Portfolio path={params.link} />;
}
