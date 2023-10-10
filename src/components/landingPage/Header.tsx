"use client";

// IMPORT LIBRARIES
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

// IMPORT COMPONENTS
import imgDIZETO from "@/assets/images/logo/dizeto.svg";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";
// import { BsSunFill } from "react-icons/bs";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const aboutElement = document.getElementById("About");
    if (aboutElement && scrollPosition > 200) {
      if (scrollPosition > aboutElement.offsetTop - 86) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [scrollPosition]);
  return (
    <header id="Top">
      <nav
        id="Navbar"
        className={`fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10 ${
          isActive && "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50"
        }`}
      >
        <Scroll to="Top" smooth={true} offset={-84} duration={500} className="cursor-pointer">
          <Image src={imgDIZETO} alt="DIZETO" width={40} height={40} priority={true} />
        </Scroll>
        <ul className="flex gap-10 text-lg font-bold dark:text-white">
          <li>
            <Scroll
              to="About"
              spy={true}
              smooth={true}
              offset={-84}
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
              offset={-84}
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
              offset={-84}
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
              offset={-84}
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
              offset={-84}
              duration={500}
              className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              Contact
            </Scroll>
          </li>
        </ul>
        {/* MARK */}
        {/* <div className="flex h-10 w-10 items-center justify-center">
          <div className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600">
            <BsSunFill size={20} />
          </div>
        </div> */}
        <div className="h-10 w-10" />
        {/* END MARK */}
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
