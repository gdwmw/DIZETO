"use client";

import { FC, ReactElement } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { BsList } from "react-icons/bs";

import { useGlobalStates } from "@/hooks/global";
import { ButtonTWM } from "@/interfaces/buttons/button";
import logoDIZETO from "@/public/assets/images/logos/dizeto.svg";

import { IconBasedOnTheme } from "./IconBasedOnTheme";

export const LINKS_DATA = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimony", label: "Testimony" },
  { href: "#client", label: "Client" },
  { href: "#contact", label: "Contact" },
];

export const Navbar: FC = (): ReactElement => {
  const { setTheme, theme } = useTheme();
  const { openASide, setOpenASide } = useGlobalStates();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("system");
    } else if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  return (
    <nav className="fixed left-0 top-0 w-full">
      <ul className="flex items-center justify-between px-10 py-3 font-semibold">
        <li className="flex size-[40px] items-center">
          <Link href="#hero">
            <Image alt="DIZETO" priority src={logoDIZETO} width={35} />
          </Link>
        </li>
        <li>
          <ul className="hidden sm:flex sm:items-center sm:gap-5 md:gap-10 lg:gap-16">
            {LINKS_DATA.map((dt, index) => (
              <li key={index}>
                <Link className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} href={dt.href}>
                  {dt.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="flex gap-2">
            <li className="flex size-[40px] items-center justify-end">
              <button className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} onClick={handleTheme} type="button">
                <IconBasedOnTheme />
              </button>
            </li>
            <li className="flex size-[40px] items-center justify-end sm:hidden">
              <button className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} onClick={() => setOpenASide(!openASide)} type="button">
                <BsList className="mr-[-4px]" size={30} />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
