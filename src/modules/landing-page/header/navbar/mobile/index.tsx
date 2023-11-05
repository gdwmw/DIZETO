"use client";

import logoDIZETO from "@/public/assets/images/logo/dizeto.webp";
import loadingAnimation from "@/public/assets/loading/loading.svg";
import Image from "next/image";
import { FC, FormEvent, ReactElement, useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ThemeSwitcherMobile } from "../theme-switcher";

type TNavbarMobileProps = {
  isActive: boolean;
  handleTopSmoothScroll: (e: FormEvent) => void;
  handleSmoothScroll: (e: FormEvent<EventTarget>) => void;
};

const NavbarMobile: FC<TNavbarMobileProps> = ({ isActive, handleTopSmoothScroll, handleSmoothScroll }): ReactElement => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <section className="min-[840px]:hidden">
      {!isOpen && (
        <div
          className={`fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10 ${
            isActive && "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50"
          }`}
        >
          <a href="#Top" className="cursor-pointer" onClick={handleTopSmoothScroll}>
            <Image src={logoDIZETO} alt="DIZETO" width={40} height={40} quality={30} priority />
          </a>

          {mounted ? (
            <div
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center hover:text-red-600 dark:text-white dark:hover:text-red-600"
            >
              <FiMenu size={35} />
            </div>
          ) : (
            <div className="fixed right-10 top-3 z-[21] h-10 w-10">
              <Image src={loadingAnimation} alt="Loading..." height={40} width={40} quality={30} priority />
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div ref={menuRef} className="navbar-menu-mobile">
          <a href="#Top" className="cursor-pointer" onClick={handleTopSmoothScroll}>
            <Image src={logoDIZETO} alt="DIZETO" width={80} height={80} quality={30} loading="lazy" />
          </a>
          <ul className="flex flex-col items-center justify-center gap-5 text-lg font-bold dark:text-white">
            <li className="space-x-10">
              <a href="#About" className="navbar-website-options" onClick={handleSmoothScroll}>
                About
              </a>

              <a href="#Portfolio" className="navbar-website-options" onClick={handleSmoothScroll}>
                Portfolio
              </a>

              <a href="#Pricing" className="navbar-website-options" onClick={handleSmoothScroll}>
                Pricing
              </a>
            </li>
            <li className="space-x-10">
              <a href="#Testimony" className="navbar-website-options" onClick={handleSmoothScroll}>
                Testimony
              </a>

              <a href="#Clients" className="navbar-website-options" onClick={handleSmoothScroll}>
                Clients
              </a>

              <a href="#Contact" className="navbar-website-options" onClick={handleSmoothScroll}>
                Contact
              </a>
            </li>
          </ul>
          <ThemeSwitcherMobile />
        </div>
      )}
    </section>
  );
};

export default NavbarMobile;
