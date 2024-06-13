import { FC, ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

import { ButtonTWM } from "@/interfaces/buttons/button";
import logoDIZETO from "@/public/assets/images/logos/dizeto.webp";

export const LinksLayout: FC = (): ReactElement => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="container mx-auto w-full max-w-[500px] space-y-10 p-5">
        <div className="paper space-y-5 bg-white p-5 dark:bg-dark">
          <header className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:text-left" id="jumbotron">
            <Image alt="DIZETO" className="h-auto md:my-5" priority quality={30} src={logoDIZETO} width={120} />
            <div>
              <h1 className="text-4xl font-semibold md:text-7xl">
                <span className="font-semibold text-red-600">DI</span>ZETO
              </h1>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-4xl">LINKS</h2>
            </div>
          </header>
          <main className="space-y-5">
            <Link className={ButtonTWM({ className: "flex items-center justify-center gap-1" })} href={"/"}>
              <TbWorldWww />
              WEBSITE
            </Link>
            <Link className={ButtonTWM({ className: "flex items-center justify-center gap-1" })} href={"/links"}>
              <IoLogoWhatsapp />
              WHATSAPP
            </Link>
            <Link
              className={ButtonTWM({ className: "flex items-center justify-center gap-1" })}
              href={"https://instagram.com/dizeto_id?igshid=YmMyMTA2M2Y="}
              target="_blank"
            >
              <AiFillInstagram />
              INSTAGRAM
            </Link>
            <Link
              className={ButtonTWM({ className: "flex items-center justify-center gap-1" })}
              href={"https://www.youtube.com/@dizeto"}
              target="_blank"
            >
              <BsYoutube />
              YOUTUBE
            </Link>
            <Link
              className={ButtonTWM({ className: "flex items-center justify-center gap-1" })}
              href={"https://twitter.com/dizeto_id"}
              target="_blank"
            >
              <BsTwitter />
              TWITTER
            </Link>
            <Link
              className={ButtonTWM({ className: "flex items-center justify-center gap-1" })}
              href={"https://www.facebook.com/profile.php?id=100083806837197"}
              target="_blank"
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
