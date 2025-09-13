"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FC, FormEvent, ReactElement, useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill, BsList } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

import logo from "@/public/assets/images/logos/dizeto.svg";
import { Button, ButtonTWM } from "@/src/components";
import { useGlobalStates } from "@/src/context";
import { setCookie } from "@/src/hooks";
import { NAVIGATION_DATA } from "@/src/libs";

export const handleSmoothScroll = (e: FormEvent, href: string) => {
  e.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
};

interface I {
  themeCookie: string | undefined;
}

export const Content: FC<I> = (props): ReactElement => {
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
      setCookie({ name: "theme", value: "system" });
    } else if (theme === "system") {
      setTheme("light");
      setCookie({ name: "theme", value: "light" });
    } else {
      setTheme("dark");
      setCookie({ name: "theme", value: "dark" });
    }
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-[2] ${isActive ? "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50" : ""}`}>
      <ul className="flex items-center justify-between px-5 py-3 font-semibold sm:px-10">
        <li className="flex size-10 items-center min-[840px]:h-10 min-[840px]:w-[128px]">
          <Link href="#hero" onClick={(e) => handleSmoothScroll(e, "#hero")}>
            <Image alt="DIZETO" priority src={logo} width={35} />
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

interface IIconBasedOnTheme {
  themeCookie: string | undefined;
}

const IconBasedOnTheme: FC<IIconBasedOnTheme> = (props): ReactElement => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState<null | ReactElement>(null);

  useEffect(() => {
    switch (theme) {
      case "dark":
        setIcon(<BsFillMoonFill size={22} />);
        break;
      case "light":
        setIcon(<BsFillSunFill size={22} />);
        break;
      case "system":
        setIcon(<SiMoonrepo size={22} />);
        break;
      default:
        setIcon(null);
    }
  }, [theme]);

  const initialIconValue = () => {
    switch (props.themeCookie) {
      case "dark":
        return <BsFillMoonFill size={22} />;
      case "light":
        return <BsFillSunFill size={22} />;
      case "system":
        return <SiMoonrepo size={22} />;
      default:
        return <SiMoonrepo size={22} />;
    }
  };

  return icon ?? initialIconValue();
};
