import { FC, ReactElement } from "react";

import Image from "next/image";

import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Title } from "@/interfaces/title";
import logoDIZETO from "@/public/assets/images/logos/dizeto.svg";

export const About: FC = (): ReactElement => {
  return (
    <ContainerPaper id="about">
      <ContentPaper>
        <Title title="ABO" titleRed="UT" />
        <div className="space-y-14 py-10 md:grid md:grid-cols-2 md:space-y-0">
          <div className="space-y-5">
            <h3 className="text-xl font-semibold sm:text-2xl">
              <span className="text-red-600">W</span>hat is Dizeto?
            </h3>
            <p className="text-justify text-sm font-semibold sm:text-base">
              <span className="text-red-600">Dizeto</span> is a vendor that offers photography, videography, talent, and music services. We have a
              professional team that can help you meet business needs, events, and your special moments to make them more beautiful, real, and
              lasting. You can learn more about us by viewing our portfolio, YouTube channel, and customer testimonials.
            </p>
            <p className="pt-5 text-sm font-semibold text-red-600 sm:text-base">
              *Please take note that we currently only offer photography and videography services.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image alt="DIZETO" height={250} priority src={logoDIZETO} width={250} />
          </div>
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
