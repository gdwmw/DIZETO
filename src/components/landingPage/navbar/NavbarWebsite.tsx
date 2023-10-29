import logoDIZETO from "@/assets/images/logo/dizeto.webp";
import Image from "next/image";
import ThemeSwitcherWebsite from "./themeSwitcher/ThemeSwitcherWebsite";

type NavbarWebsiteProps = {
  isActive: boolean;
  handleTopSmoothScroll: (e: any) => void;
  handleSmoothScroll: (e: any) => void;
};

export default function NavbarWebsite({ isActive, handleTopSmoothScroll, handleSmoothScroll }: NavbarWebsiteProps) {
  return (
    <section className="hidden min-[840px]:block">
      <div
        className={`fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10 ${
          isActive && "shadow-md shadow-black/50 backdrop-blur-md dark:shadow-white/50"
        }`}
      >
        <a href="#Top" className="cursor-pointer" onClick={handleTopSmoothScroll}>
          <Image src={logoDIZETO} alt="DIZETO" width={40} height={40} quality={30} priority />
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
    </section>
  );
}
