import logoDIZETO from "@/assets/images/logo/dizeto.webp";
import AncorButton from "@/components/links/buttons/AncorButton";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

export default function Page() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="container mx-auto w-full max-w-[500px] space-y-10 p-5">
        <div className="paper space-y-5 bg-white p-5 dark:bg-dark">
          <header id="jumbotron" className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:text-left">
            <Image src={logoDIZETO} alt="DIZETO" quality={30} priority className="h-auto w-[120px] md:my-5" />
            <div>
              <h1 className="text-4xl font-semibold md:text-7xl">
                <span className="font-semibold text-red-600">DI</span>ZETO
              </h1>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-4xl">LINKS</h2>
            </div>
          </header>
          <main className="space-y-5">
            <AncorButton icon={<TbWorldWww />} hrf="/" label="WEBSITE" />
            <AncorButton icon={<IoLogoWhatsapp />} hrf="/" label="WHATSAPP" />
            <AncorButton icon={<AiFillInstagram />} hrf="https://instagram.com/dizeto_id?igshid=YmMyMTA2M2Y=" label="INSTAGRAM" />
            <AncorButton icon={<BsYoutube />} hrf="https://www.youtube.com/@dizeto" label="YOUTUBE" />
            <AncorButton icon={<BsTwitter />} hrf="https://twitter.com/dizeto_id" label="TWITTER" />
            <AncorButton icon={<BsFacebook />} hrf="https://www.facebook.com/profile.php?id=100083806837197" label="FACEBOOK" />
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
}
