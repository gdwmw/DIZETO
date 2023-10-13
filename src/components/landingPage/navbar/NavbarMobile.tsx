"use client";

// IMPORT LIBRARIES
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Link as Scroll } from "react-scroll";
import { FiMenu } from "react-icons/fi";

// IMPORT COMPONENTS
import imgDIZETO from "@/assets/images/logo/dizeto.svg";
import ThemeSwitcherMobile from "../themeSwitcher/ThemeSwitcherMobile";

export default function NavbarMobile() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
    <nav className="min-[840px]:hidden">
      {!isOpen && (
        <div
          className={`fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10 ${
            isActive && "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50"
          }`}
        >
          <Scroll to="Top" smooth={true} offset={-84} duration={500} className="cursor-pointer">
            <Image src={imgDIZETO} alt="DIZETO" width={40} height={40} priority={true} />
          </Scroll>

          {mounted ? (
            <div
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              <FiMenu size={35} />
            </div>
          ) : (
            <div className="fixed right-10 top-3 z-[21] h-10 w-10">
              <Image src={require("@/assets/loading/loading.svg")} alt="Loading" height={40} width={40} />
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed left-0 top-0 z-[22] flex h-80 w-full flex-col items-center justify-center gap-5 shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50"
        >
          <Scroll to="Top" smooth={true} offset={-84} duration={500} className="cursor-pointer">
            <Image src={imgDIZETO} alt="DIZETO" width={80} height={80} priority={true} />
          </Scroll>
          <ul className="flex flex-col items-center justify-center gap-5 text-lg font-bold dark:text-white">
            <li className="space-x-10">
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

              <Scroll
                to="Portfolio"
                smooth={true}
                offset={-84}
                duration={500}
                className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
              >
                Portfolio
              </Scroll>

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
            <li className="space-x-10">
              <Scroll
                to="Testimony"
                smooth={true}
                offset={-84}
                duration={500}
                className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
              >
                Testimony
              </Scroll>

              <Scroll
                to="Clients"
                smooth={true}
                offset={-84}
                duration={500}
                className="cursor-pointer hover:text-red-600 dark:text-white dark:hover:text-red-600"
              >
                Clients
              </Scroll>

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
          <ThemeSwitcherMobile />
        </div>
      )}
    </nav>
  );
}
