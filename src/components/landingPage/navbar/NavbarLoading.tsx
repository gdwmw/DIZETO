// IMPORT LIBRARIES
import Image from "next/image";

export default function NavbarLoading() {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10">
      <Image
        className="cursor-wait"
        src={require("@/assets/images/logo/dizeto.svg")}
        alt="DIZETO"
        width={40}
        height={40}
        quality={50}
        priority={true}
      />
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
        <Image src={require("@/assets/loading/loading.svg")} alt="Loading" height={40} width={40} quality={50} />
      </div>
    </div>
  );
}
