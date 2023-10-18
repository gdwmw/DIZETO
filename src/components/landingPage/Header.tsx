"use client";

// IMPORT LIBRARIES
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// IMPORT COMPONENTS
import NavbarLoading from "./navbar/NavbarLoading";
const DynamicNavbarWebsite = dynamic(() => import("./navbar/NavbarWebsite"), { loading: () => <NavbarLoading /> });
const DynamicNavbarMobile = dynamic(() => import("./navbar/NavbarMobile"), { loading: () => <NavbarLoading /> });

export default function Header() {
  const [navbar, setNavbar] = useState<React.ReactNode>(<NavbarLoading />);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    if (newWidth >= 840) {
      setNavbar(<DynamicNavbarWebsite />);
    } else {
      setNavbar(<DynamicNavbarMobile />);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header id="Top">
      <nav>{navbar}</nav>
    </header>
  );
}
