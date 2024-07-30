"use client";

import { FC, FormEvent, ReactElement, useEffect, useState } from "react";

import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { BsList } from "react-icons/bs";

import logoDIZETO from "@/root/public/assets/images/logos/dizeto.svg";
import { Button, ButtonTWM } from "@/src/components/interfaces/buttons/button";
import { useGlobalStates } from "@/src/context";
import { setCookie } from "@/src/hooks/cookies";
import { NAVIGATION_DATA } from "@/src/libs/constants";

import { IconBasedOnTheme } from "./batches/icon-based-on-theme";

export const handleSmoothScroll = (e: FormEvent, href: string) => {
  e.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
};

interface I {
  authStatus: null | string | undefined;
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
        <li className="flex size-10 items-center min-[840px]:h-10 min-[840px]:w-[120px]">
          <Link href="#hero" onClick={(e) => handleSmoothScroll(e, "#hero")}>
            <Image alt="DIZETO" priority src={logoDIZETO} width={35} />
          </Link>
        </li>
        <li>
          <ul className="hidden min-[840px]:flex min-[840px]:items-center min-[840px]:gap-5 min-[940px]:gap-8 min-[1000px]:gap-10 min-[1060px]:gap-12 min-[1100px]:gap-14 min-[1160px]:gap-16">
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
            {!props.authStatus ? (
              <li className="hidden min-[840px]:flex min-[840px]:items-center min-[840px]:justify-end">
                <Link className={ButtonTWM({ className: "h-8 min-w-[80px] px-0", color: "red", size: "sm", variant: "outline" })} href={"/login"}>
                  Login
                </Link>
              </li>
            ) : (
              <li className="hidden min-[840px]:flex min-[840px]:items-center min-[840px]:justify-end">
                <Button className="h-8 min-w-[80px] px-0" color="red" onClick={() => signOut()} size="sm" variant="outline">
                  Logout
                </Button>
              </li>
            )}
            <li className="flex size-[40px] items-center justify-end">
              <Button color="black" onClick={handleUpdateTheme} size="sm" type="button" variant="ghost">
                <IconBasedOnTheme themeCookie={props.themeCookie} />
              </Button>
            </li>
            <li className="flex size-[40px] items-center justify-end min-[840px]:hidden">
              <Button color="black" onClick={() => setOpenASide(true)} size="sm" type="button" variant="ghost">
                <BsList className="mr-[-4px]" size={30} />
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
