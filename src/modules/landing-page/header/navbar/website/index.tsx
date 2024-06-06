import { FC, FormEvent, ReactElement } from "react";

import Image from "next/image";

import logoDIZETO from "@/public/assets/images/logos/dizeto.webp";

import { ThemeSwitcherWebsite } from "../theme-switcher";

type TNavbarWebsiteProps = {
  handleSmoothScroll: (e: FormEvent<EventTarget>) => void;
  handleTopSmoothScroll: (e: FormEvent) => void;
  isActive: boolean;
};

const NavbarWebsite: FC<TNavbarWebsiteProps> = ({ handleSmoothScroll, handleTopSmoothScroll, isActive }): ReactElement => {
  return (
    <section className="hidden min-[840px]:block">
      <div
        className={`fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10 ${
          isActive && "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50"
        }`}
      >
        <a className="cursor-pointer" href="#Top" onClick={handleTopSmoothScroll}>
          <Image alt="DIZETO" height={40} priority quality={30} src={logoDIZETO} width={40} />
        </a>
        <ul className="flex gap-10 text-lg font-bold dark:text-white">
          <li>
            <a className="navbar-website-options" href="#About" onClick={handleSmoothScroll}>
              About
            </a>
          </li>
          <li>
            <a className="navbar-website-options" href="#Portfolio" onClick={handleSmoothScroll}>
              Portfolio
            </a>
          </li>
          <li>
            <a className="navbar-website-options" href="#Pricing" onClick={handleSmoothScroll}>
              Pricing
            </a>
          </li>
          <li>
            <a className="navbar-website-options" href="#Testimony" onClick={handleSmoothScroll}>
              Testimony
            </a>
          </li>
          <li>
            <a className="navbar-website-options" href="#Clients" onClick={handleSmoothScroll}>
              Clients
            </a>
          </li>
          <li>
            <a className="navbar-website-options" href="#Contact" onClick={handleSmoothScroll}>
              Contact
            </a>
          </li>
        </ul>
        {/* MARK */}
        <div className="size-10" />
        {/* END MARK */}
      </div>
      <ThemeSwitcherWebsite />
    </section>
  );
};

export default NavbarWebsite;
