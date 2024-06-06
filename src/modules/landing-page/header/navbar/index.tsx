"use client";

import { FC, FormEvent, ReactElement, useCallback, useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { NavbarLoading } from "./loading";
const DynamicNavbarMobile = dynamic(() => import("./mobile"), { loading: () => <NavbarLoading /> });
const DynamicNavbarWebsite = dynamic(() => import("./website"), { loading: () => <NavbarLoading /> });

export const Navbar: FC = (): ReactElement => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>();

  const handleResize = () => {
    const newWidth: number = window.innerWidth;
    if (newWidth >= 840) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    const aboutElement: HTMLElement | null = document.getElementById("About");
    if (aboutElement && scrollPosition > 200) {
      if (scrollPosition > aboutElement.offsetTop - 86) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [scrollPosition]);

  const handleTopSmoothScroll = useCallback((e: FormEvent) => {
    e.preventDefault();
    const targetElement: HTMLElement | null = document.getElementById("Top");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSmoothScroll = useCallback((e: FormEvent<EventTarget>) => {
    e.preventDefault();
    const targetId: string | undefined = (e.target as HTMLAnchorElement)?.getAttribute("href")?.substring(1);
    const targetElement: HTMLElement | null = document.getElementById(targetId || "");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav>
      {navbar ? (
        <DynamicNavbarWebsite handleSmoothScroll={handleSmoothScroll} handleTopSmoothScroll={handleTopSmoothScroll} isActive={isActive} />
      ) : (
        <DynamicNavbarMobile handleSmoothScroll={handleSmoothScroll} handleTopSmoothScroll={handleTopSmoothScroll} isActive={isActive} />
      )}
    </nav>
  );
};
