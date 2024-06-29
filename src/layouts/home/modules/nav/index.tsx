"use client";

import { FC, FormEvent, ReactElement, useEffect, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";
import Link from "next/link";
import { BsList } from "react-icons/bs";

import { useGlobalStates } from "@/hooks/global";
import { ButtonTWM } from "@/interfaces/buttons/button";
import logoDIZETO from "@/public/assets/images/logos/dizeto.svg";
import { PUTTheme } from "@/utils";

import { IconBasedOnTheme } from "./batches/icon-based-on-theme";

export const LINKS_DATA = [
  { href: "#about", label: "About" },
  { href: "#highlight", label: "Highlight" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimony", label: "Testimony" },
  { href: "#client", label: "Client" },
  { href: "#contact", label: "Contact" },
];

export const handleSmoothScroll = (e: FormEvent, href: string) => {
  e.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
};

type T = {
  themeCookie: RequestCookie | undefined;
};

export const Nav: FC<T> = ({ themeCookie }): ReactElement => {
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

  const mutateUpdateTheme = useMutation({
    mutationFn: PUTTheme,
  });

  const handleUpdateTheme = () => {
    if (theme === "dark") {
      setTheme("system");
      mutateUpdateTheme.mutate("system");
    } else if (theme === "system") {
      setTheme("light");
      mutateUpdateTheme.mutate("light");
    } else {
      setTheme("dark");
      mutateUpdateTheme.mutate("dark");
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
            {LINKS_DATA.map((dt, index) => (
              <li key={index}>
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
                <IconBasedOnTheme themeCookie={themeCookie} />
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
