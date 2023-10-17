// IMPORT LIBRARIES
import Image from "next/image";
import { useEffect, useState } from "react";

// IMPORT COMPONENTS
import ThemeSwitcherWebsite from "../themeSwitcher/ThemeSwitcherWebsite";

export default function NavbarWebsite() {
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

  const handleTopSmoothScroll = (e: any) => {
    e.preventDefault();
    const targetElement = document.getElementById("Top");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSmoothScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hidden min-[840px]:block">
      <div
        className={`fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10 ${
          isActive && "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50"
        }`}
      >
        <a href="#Top" className="cursor-pointer" onClick={handleTopSmoothScroll}>
          <Image src={require("@/assets/images/logo/dizeto.svg")} alt="DIZETO" width={40} height={40} quality={50} priority={true} />
        </a>
        <ul className="flex gap-10 text-lg font-bold dark:text-white">
          <li>
            <a href="#About" className="navbar-website-options" onClick={handleSmoothScroll}>
              About
            </a>
          </li>
          <li>
            <a href="#Portfolio" className="navbar-website-options" onClick={handleSmoothScroll}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#Pricing" className="navbar-website-options" onClick={handleSmoothScroll}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#Testimony" className="navbar-website-options" onClick={handleSmoothScroll}>
              Testimony
            </a>
          </li>
          <li>
            <a href="#Clients" className="navbar-website-options" onClick={handleSmoothScroll}>
              Clients
            </a>
          </li>
          <li>
            <a href="#Contact" className="navbar-website-options" onClick={handleSmoothScroll}>
              Contact
            </a>
          </li>
        </ul>
        {/* MARK */}
        <div className="h-10 w-10" />
        {/* END MARK */}
      </div>
      <ThemeSwitcherWebsite />
    </div>
  );
}
