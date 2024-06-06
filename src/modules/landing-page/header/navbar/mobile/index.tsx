"use client";

import { FC, FormEvent, ReactElement, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { FiMenu } from "react-icons/fi";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";
import logoDIZETO from "@/public/assets/images/logos/dizeto.webp";

import { ThemeSwitcherMobile } from "../theme-switcher";

type TNavbarMobileProps = {
  handleSmoothScroll: (e: FormEvent<EventTarget>) => void;
  handleTopSmoothScroll: (e: FormEvent) => void;
  isActive: boolean;
};

const NavbarMobile: FC<TNavbarMobileProps> = ({ handleSmoothScroll, handleTopSmoothScroll, isActive }): ReactElement => {
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
          <a className="cursor-pointer" href="#Top" onClick={handleTopSmoothScroll}>
            <Image alt="DIZETO" height={40} priority quality={30} src={logoDIZETO} width={40} />
          </a>

          {mounted ? (
            <div
              className="flex size-10 items-center justify-center hover:text-red-600 dark:text-white dark:hover:text-red-600"
              onClick={() => setIsOpen(true)}
            >
              <FiMenu size={35} />
            </div>
          ) : (
            <div className="fixed right-10 top-3 z-[21] size-10">
              <Image alt="Loading..." height={40} priority quality={30} src={loadingAnimation} width={40} />
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div className="navbar-menu-mobile" ref={menuRef}>
          <a className="cursor-pointer" href="#Top" onClick={handleTopSmoothScroll}>
            <Image alt="DIZETO" height={80} loading="lazy" quality={30} src={logoDIZETO} width={80} />
          </a>
          <ul className="flex flex-col items-center justify-center gap-5 text-lg font-bold dark:text-white">
            <li className="space-x-10">
              <a className="navbar-website-options" href="#About" onClick={handleSmoothScroll}>
                About
              </a>

              <a className="navbar-website-options" href="#Portfolio" onClick={handleSmoothScroll}>
                Portfolio
              </a>

              <a className="navbar-website-options" href="#Pricing" onClick={handleSmoothScroll}>
                Pricing
              </a>
            </li>
            <li className="space-x-10">
              <a className="navbar-website-options" href="#Testimony" onClick={handleSmoothScroll}>
                Testimony
              </a>

              <a className="navbar-website-options" href="#Clients" onClick={handleSmoothScroll}>
                Clients
              </a>

              <a className="navbar-website-options" href="#Contact" onClick={handleSmoothScroll}>
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
