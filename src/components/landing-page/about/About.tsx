import logoDIZETO from "@/assets/images/logo/dizeto.webp";
import Image from "next/image";

export default function About(): JSX.Element {
  return (
    <section id="About" className="scroll-mt-[84px]">
      <div className="paper bg-white p-5 dark:bg-dark">
        <h2 className="text-center text-3xl font-semibold">
          ABO<span className="text-red-600">UT</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <div className="my-10 space-y-14 md:grid md:grid-cols-2 md:space-y-0">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">
              <span className="text-red-600">W</span>hat is Dizeto?
            </h3>
            <p className="text-justify font-semibold">
              <span className="text-red-600">Dizeto</span> is a vendor that offers photography, videography, talent, and music services. We have a
              professional team that can help you meet business needs, events, and your special moments to make them more beautiful, real, and
              lasting. You can learn more about us by viewing our portfolio, YouTube channel, and customer testimonials.
            </p>
            <p className="pt-5 font-semibold text-red-600">*Please take note that we currently only offer photography and videography services.</p>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <Image src={logoDIZETO} alt="DIZETO" height={250} width={250} quality={30} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
