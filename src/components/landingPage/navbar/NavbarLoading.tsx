// IMPORT LIBRARIES
import Image from "next/image";

export default function NavbarLoading() {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-16 w-full items-center justify-between px-10">
      <Image src={require("@/assets/images/logo/dizeto.svg")} alt="DIZETO" width={40} height={40} quality={50} priority={true} />
      <div className="flex gap-10 text-lg font-bold dark:text-white">
        <div className="navbar-loading" />
      </div>
      <div className="h-10 w-10">
        <Image src={require("@/assets/loading/loading.svg")} alt="Loading" height={40} width={40} quality={50} />
      </div>
    </div>
  );
}
