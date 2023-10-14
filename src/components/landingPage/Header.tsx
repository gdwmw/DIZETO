// IMPORT COMPONENTS
import NavbarMobile from "./navbar/NavbarMobile";
import NavbarWebsite from "./navbar/NavbarWebsite";

export default function Header() {
  return (
    <header id="Top">
      <nav>
        <NavbarWebsite />
        <NavbarMobile />
      </nav>
    </header>
  );
}
