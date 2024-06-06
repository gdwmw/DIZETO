"use client";

import { FC, ReactElement, useEffect, useRef, useState } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";

export const ThemeSwitcherWebsite: FC = (): ReactElement => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="fixed right-10 top-3 z-[21] size-10">
        <Image alt="Loading..." height={40} priority quality={30} src={loadingAnimation} width={40} />
      </div>
    );
  }

  return (
    <div className="fixed right-10 top-3 z-[21] flex size-10 items-center justify-center">
      <div className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600" onClick={() => setIsOpen(true)}>
        {theme === "light" && <BsSunFill size={20} />}
        {theme === "dark" && <BsFillMoonStarsFill size={20} />}
        {theme === "system" && <SiMoonrepo size={20} />}
      </div>
      {isOpen && (
        <ul className="theme-menu-website" ref={menuRef}>
          <li
            className="theme-menu-website-options"
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
          >
            <BsSunFill size={20} />
            <span className="font-bold">Light</span>
          </li>
          <li
            className="theme-menu-website-options"
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
          >
            <BsFillMoonStarsFill size={20} />
            <span className="font-bold">Dark</span>
          </li>
          <li
            className="theme-menu-website-options"
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
          >
            <SiMoonrepo size={20} />
            <span className="font-bold">System</span>
          </li>
        </ul>
      )}
    </div>
  );
};
