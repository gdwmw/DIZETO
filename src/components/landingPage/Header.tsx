"use client";

// IMPORT LIBRARIES
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

// IMPORT COMPONENTS
import imgDIZETO from "@/assets/images/logo/dizeto.svg";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <header>
      <nav className="flex h-16 w-full items-center justify-between px-10 shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50">
        <Image src={imgDIZETO} alt="DIZETO" width={40} height={40} />
        <ul className="flex gap-10 text-lg font-bold dark:text-white">
          <li>
            <Scroll
              to="About"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              About
            </Scroll>
          </li>
          <li>
            <Scroll
              to="Portfolio"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              Portfolio
            </Scroll>
          </li>
          <li>
            <Scroll
              to="Pricing"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              Pricing
            </Scroll>
          </li>
          <li>
            <Scroll
              to="Clients"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              Clients
            </Scroll>
          </li>
          <li>
            <Scroll
              to="Contact"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              Contact
            </Scroll>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
