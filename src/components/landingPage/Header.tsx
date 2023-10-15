import { useEffect, useState } from "react";
import NavbarMobile from "./navbar/NavbarMobile";
import NavbarWebsite from "./navbar/NavbarWebsite";
import NavbarLoading from "./navbar/NavbarLoading";

export default function Header() {
  const [navbar, setNavbar] = useState<React.ReactNode>(<NavbarLoading />);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    if (newWidth >= 840) {
      setNavbar(<NavbarWebsite />);
    } else {
      setNavbar(<NavbarMobile />);
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
