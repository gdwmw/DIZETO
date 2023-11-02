"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useCallback } from "react";
import NavbarLoading from "./NavbarLoading";
const DynamicNavbarWebsite = dynamic(() => import("./NavbarWebsite"), { loading: () => <NavbarLoading /> });
const DynamicNavbarMobile = dynamic(() => import("./NavbarMobile"), { loading: () => <NavbarLoading /> });

export default function Navbar() {
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

  const handleTopSmoothScroll = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const targetElement: HTMLElement | null = document.getElementById("Top");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSmoothScroll = useCallback((e: React.FormEvent<EventTarget>) => {
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
        <DynamicNavbarWebsite isActive={isActive} handleTopSmoothScroll={handleTopSmoothScroll} handleSmoothScroll={handleSmoothScroll} />
      ) : (
        <DynamicNavbarMobile isActive={isActive} handleTopSmoothScroll={handleTopSmoothScroll} handleSmoothScroll={handleSmoothScroll} />
      )}
    </nav>
  );
}
