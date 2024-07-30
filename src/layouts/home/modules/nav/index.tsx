"use client";

import { FC, FormEvent, ReactElement, useEffect, useState } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { BsList } from "react-icons/bs";

import logoDIZETO from "@/root/public/assets/images/logos/dizeto.svg";
import { ButtonTWM } from "@/src/components/interfaces/buttons/button";
import { useGlobalStates } from "@/src/context";
import { setCookie } from "@/src/hooks/cookies";
import { NAVIGATION_DATA } from "@/src/libs/constants";

import { IconBasedOnTheme } from "./batches/icon-based-on-theme";

export const handleSmoothScroll = (e: FormEvent, href: string) => {
  e.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
};

interface I {
  themeCookie: string;
}

export const Nav: FC<I> = (props): ReactElement => {
  const { setTheme, theme } = useTheme();
  const { setOpenASide } = useGlobalStates();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      setIsActive(scrollPosition > aboutElement.offsetTop - 86);
    }
  }, [scrollPosition]);

  const handleUpdateTheme = () => {
    if (theme === "dark") {
      setTheme("system");
      setCookie({ name: "theme", options: { path: "/" }, value: "system" });
    } else if (theme === "system") {
      setTheme("light");
      setCookie({ name: "theme", options: { path: "/" }, value: "light" });
    } else {
      setTheme("dark");
      setCookie({ name: "theme", options: { path: "/" }, value: "dark" });
    }
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-[2] ${isActive ? "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50" : ""}`}>
      <ul className="flex items-center justify-between px-5 py-3 font-semibold sm:px-10">
        <li className="flex size-[40px] items-center">
          <Link href="#hero" onClick={(e) => handleSmoothScroll(e, "#hero")}>
            <Image alt="DIZETO" priority src={logoDIZETO} width={35} />
          </Link>
        </li>
        <li>
          <ul className="hidden sm:flex sm:items-center sm:gap-5 md:gap-10 lg:gap-16">
            {NAVIGATION_DATA.map((dt) => (
              <li key={dt.id}>
                <Link
                  className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })}
                  href={dt.href}
                  onClick={(e) => handleSmoothScroll(e, dt.href)}
                >
                  {dt.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="flex gap-2">
            <li className="flex size-[40px] items-center justify-end">
              <button className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} onClick={handleUpdateTheme} type="button">
                <IconBasedOnTheme themeCookie={props.themeCookie} />
              </button>
            </li>
            <li className="flex size-[40px] items-center justify-end sm:hidden">
              <button className={ButtonTWM({ color: "black", size: "sm", variant: "ghost" })} onClick={() => setOpenASide(true)} type="button">
                <BsList className="mr-[-4px]" size={30} />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
