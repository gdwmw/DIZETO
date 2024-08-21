import { FC, PropsWithChildren, ReactElement } from "react";

import Image from "next/image";

import logoDIZETO from "@/public/assets/images/logos/dizeto.svg";

import { ContainerPaper, ContentPaper } from "..";
import { Title } from "../../title";

type TLayout = {
  id: string;
} & Readonly<PropsWithChildren>;

const Layout: FC<TLayout> = (props): ReactElement => (
  <ContainerPaper id={props.id}>
    <ContentPaper>
      <Title redColor={3} title="ABOUT" />
      <div className="space-y-14 py-10 md:grid md:grid-cols-2 md:space-y-0">
        <div className="space-y-5">
          <h3 className="text-xl font-semibold sm:text-2xl">
            <span className="text-red-600">W</span>hat is Dizeto?
          </h3>
          <p className="text-justify text-sm font-semibold sm:text-base">
            <span className="text-red-600">Dizeto</span> is a vendor that offers photography, videography, talent, and music services. We have a
            professional team that can help you meet business needs, events, and your special moments to make them more beautiful, real, and lasting.
            You can learn more about us by viewing our portfolio, YouTube channel, and customer testimonials.
          </p>
          <p className="pt-5 text-sm font-semibold text-red-600 sm:text-base">
            *Please take note that we currently only offer photography and videography services.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image alt="DIZETO" height={250} priority src={logoDIZETO} width={250} />
        </div>
      </div>
      {props.children}
    </ContentPaper>
  </ContainerPaper>
);

export default Layout;
