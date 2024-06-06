import { FC, ReactElement } from "react";

import Image from "next/image";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";
import logoDIZETO from "@/public/assets/images/logos/dizeto.webp";

export const NavbarLoading: FC = (): ReactElement => {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10">
      <Image alt="DIZETO" className="cursor-wait" height={40} priority quality={30} src={logoDIZETO} width={40} />
      <ul className="hidden gap-10 text-lg font-bold dark:text-white min-[840px]:flex">
        <li className="cursor-wait">
          <p>About</p>
        </li>
        <li className="cursor-wait">
          <p>Portfolio</p>
        </li>
        <li className="cursor-wait">
          <p>Pricing</p>
        </li>
        <li className="cursor-wait">
          <p>Testimony</p>
        </li>
        <li className="cursor-wait">
          <p>Clients</p>
        </li>
        <li className="cursor-wait">
          <p>Contact</p>
        </li>
      </ul>
      <div className="size-10">
        <Image alt="Loading..." height={40} priority quality={30} src={loadingAnimation} width={40} />
      </div>
    </div>
  );
};
