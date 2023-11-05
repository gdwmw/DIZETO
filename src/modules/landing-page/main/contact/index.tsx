import { FC, ReactElement } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

export const Contact: FC = (): ReactElement => {
  return (
    <section id="Contact" className="scroll-mt-[84px]">
      <div className="paper bg-white p-5 dark:bg-dark">
        <h2 className="text-center text-3xl font-semibold">
          CONTA<span className="text-red-600">CT</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <iframe
          title="Google Maps"
          loading="lazy"
          className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.143343315141!2d107.6504268!3d-6.8863111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1697306682702!5m2!1sid!2sid"
        />
        <ul className="space-y-2 dark:text-white">
          <li className="flex gap-2">
            <div className="min-h-fit min-w-fit">
              <MdLocationOn size={20} />
            </div>
            <p className="font-bold">Address:</p>
            <a
              href="https://www.google.com/search?q=dizeto&oq=dizeto&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGKIEMgcIAhAAGKIEMgcIAxAAGKIEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRhAMgYIBxBFGDwyBggIEEUYPNIBCDQwMzlqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              Blk. A-B No.a8, Cibeunying, Kec. Cimenyan, Kabupaten Bandung, Jawa Barat 40191, Indonesia
            </a>
          </li>
          <li className="flex gap-2">
            <div className="min-h-fit min-w-fit">
              <MdEmail size={20} />
            </div>
            <p className="font-bold">Email:</p>
            <a
              href="https://mail.google.com/mail/u/?authuser=dizetobs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              dizetobs@gmail.com
            </a>
          </li>
          <li className="flex gap-2">
            <div className="min-h-fit min-w-fit">
              <MdPhone size={20} />
            </div>
            <p className="font-bold">Phone:</p>
            <a href="/" className="hover:text-red-600">
              +62 000-0000-0000
            </a>
          </li>
          <li className="flex gap-2">
            <div className="min-h-fit min-w-fit">
              <TbWorldWww size={20} />
            </div>
            <p className="font-bold">Website:</p>
            <a href="https://dizeto.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              https://dizeto.vercel.app/
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
