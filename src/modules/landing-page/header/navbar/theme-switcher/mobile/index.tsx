"use client";

import { FC, ReactElement } from "react";

import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";

export const ThemeSwitcherMobile: FC = (): ReactElement => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex h-10 w-60 items-center justify-center">
      <ul className="flex gap-10 dark:text-white">
        <li
          className={`cursor-pointer ${theme === "light" ? "text-red-600" : "hover:text-red-600"} dark:hover:text-red-600`}
          onClick={() => setTheme("light")}
        >
          <BsSunFill size={25} />
        </li>
        <li
          className={`cursor-pointer ${theme === "dark" ? "text-red-600" : "hover:text-red-600"} dark:hover:text-red-600`}
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonStarsFill size={25} />
        </li>
        <li
          className={`cursor-pointer ${theme === "system" ? "text-red-600" : "hover:text-red-600"} dark:hover:text-red-600`}
          onClick={() => setTheme("system")}
        >
          <SiMoonrepo size={25} />
        </li>
      </ul>
    </div>
  );
};
