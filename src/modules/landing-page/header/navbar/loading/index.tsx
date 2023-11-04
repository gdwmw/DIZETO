import logoDIZETO from "@/assets/images/logo/dizeto.webp";
import loadingAnimation from "@/assets/loading/loading.svg";
import Image from "next/image";

export function NavbarLoading(): JSX.Element {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10">
      <Image className="cursor-wait" src={logoDIZETO} alt="DIZETO" width={40} height={40} quality={30} priority />
      <ul className="hidden gap-10 text-lg font-bold dark:text-white min-[840px]:flex">
        <li className="cursor-wait">
          <p>About</p>
        </li>
        <li className="cursor-wait">
          <p>Portfolio</p>
        </li>
        <li className="cursor-wait">
          <p>Pricing</p>
        </li>
        <li className="cursor-wait">
          <p>Testimony</p>
        </li>
        <li className="cursor-wait">
          <p>Clients</p>
        </li>
        <li className="cursor-wait">
          <p>Contact</p>
        </li>
      </ul>
      <div className="h-10 w-10">
        <Image src={loadingAnimation} alt="Loading..." height={40} width={40} quality={30} priority />
      </div>
    </div>
  );
}
