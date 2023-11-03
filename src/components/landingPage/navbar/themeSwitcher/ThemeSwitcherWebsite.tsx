"use client";

import loadingAnimation from "@/assets/loading/loading.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

export default function ThemeSwitcherWebsite(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
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
      <div className="fixed right-10 top-3 z-[21] h-10 w-10">
        <Image src={loadingAnimation} alt="Loading..." height={40} width={40} quality={30} priority />
      </div>
    );
  }

  return (
    <div className="fixed right-10 top-3 z-[21] flex h-10 w-10 items-center justify-center">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600">
        {theme === "light" && <BsSunFill size={20} />}
        {theme === "dark" && <BsFillMoonStarsFill size={20} />}
        {theme === "system" && <SiMoonrepo size={20} />}
      </div>
      {isOpen && (
        <ul ref={menuRef} className="theme-menu-website">
          <li
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className="theme-menu-website-options"
          >
            <BsSunFill size={20} />
            <span className="font-bold">Light</span>
          </li>
          <li
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className="theme-menu-website-options"
          >
            <BsFillMoonStarsFill size={20} />
            <span className="font-bold">Dark</span>
          </li>
          <li
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className="theme-menu-website-options"
          >
            <SiMoonrepo size={20} />
            <span className="font-bold">System</span>
          </li>
        </ul>
      )}
    </div>
  );
}
