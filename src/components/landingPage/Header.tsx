// IMPORT COMPONENTS
import NavbarWebsite from "./navbar/NavbarWebsite";
import NavbarMobile from "./navbar/NavbarMobile";

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
