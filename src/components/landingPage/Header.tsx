import NavbarWebsite from "./navbar/NavbarWebsite";
import NavbarMobile from "./navbar/NavbarMobile";

export default function Header() {
  return (
    <header id="Top">
      <NavbarWebsite />
      <NavbarMobile />
    </header>
  );
}
