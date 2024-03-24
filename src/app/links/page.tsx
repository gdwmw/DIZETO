import { ButtonCVA } from "@/components";
import logoDIZETO from "@/public/assets/images/logos/dizeto.webp";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

const Links: FC = (): ReactElement => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="container mx-auto w-full max-w-[500px] space-y-10 p-5">
        <div className="paper space-y-5 bg-white p-5 dark:bg-dark">
          <header id="jumbotron" className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:text-left">
            <Image src={logoDIZETO} alt="DIZETO" quality={30} width={120} priority className="h-auto md:my-5" />
            <div>
              <h1 className="text-4xl font-semibold md:text-7xl">
                <span className="font-semibold text-red-600">DI</span>ZETO
              </h1>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-4xl">LINKS</h2>
            </div>
          </header>
          <main className="space-y-5">
            <Link href={"/"} className={ButtonCVA({ className: "flex items-center justify-center gap-1" })}>
              <TbWorldWww />
              WEBSITE
            </Link>
            <Link href={"/links"} className={ButtonCVA({ className: "flex items-center justify-center gap-1" })}>
              <IoLogoWhatsapp />
              WHATSAPP
            </Link>
            <Link
              href={"https://instagram.com/dizeto_id?igshid=YmMyMTA2M2Y="}
              target="_blank"
              className={ButtonCVA({ className: "flex items-center justify-center gap-1" })}
            >
              <AiFillInstagram />
              INSTAGRAM
            </Link>
            <Link
              href={"https://www.youtube.com/@dizeto"}
              target="_blank"
              className={ButtonCVA({ className: "flex items-center justify-center gap-1" })}
            >
              <BsYoutube />
              YOUTUBE
            </Link>
            <Link
              href={"https://twitter.com/dizeto_id"}
              target="_blank"
              className={ButtonCVA({ className: "flex items-center justify-center gap-1" })}
            >
              <BsTwitter />
              TWITTER
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100083806837197"}
              target="_blank"
              className={ButtonCVA({ className: "flex items-center justify-center gap-1" })}
            >
              <BsFacebook />
              FACEBOOK
            </Link>
          </main>
        </div>
        <footer className="w-full">
          <div className="footer-paper">
            <p className="text-center text-base font-bold">{`WE'RE LOOKING FORWARD TO HEARING FROM YOU!`}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Links;
