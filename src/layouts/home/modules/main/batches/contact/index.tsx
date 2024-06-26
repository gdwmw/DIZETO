import { FC, ReactElement } from "react";

import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

export const Contact: FC = (): ReactElement => {
  return (
    <section className="scroll-mt-[84px]" id="Contact">
      <div className="paper bg-white p-5 dark:bg-dark">
        <h2 className="text-center text-3xl font-semibold">
          CONTA<span className="text-red-600">CT</span>
          <div className="mx-auto h-0.5 w-20 rounded-full bg-red-600" />
        </h2>
        <iframe
          className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.143343315141!2d107.6504268!3d-6.8863111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1697306682702!5m2!1sid!2sid"
          title="Google Maps"
        />
        <ul className="space-y-2 dark:text-white">
          <li className="flex gap-2">
            <div className="min-h-fit min-w-fit">
              <MdLocationOn size={20} />
            </div>
            <p className="font-bold">Address:</p>
            <a
              className="hover:text-red-600"
              href="https://www.google.com/search?q=dizeto&oq=dizeto&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGKIEMgcIAhAAGKIEMgcIAxAAGKIEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRhAMgYIBxBFGDwyBggIEEUYPNIBCDQwMzlqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8"
              rel="noopener noreferrer"
              target="_blank"
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
              className="hover:text-red-600"
              href="https://mail.google.com/mail/u/?authuser=dizetobs@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              dizetobs@gmail.com
            </a>
          </li>
          <li className="flex gap-2">
            <div className="min-h-fit min-w-fit">
              <MdPhone size={20} />
            </div>
            <p className="font-bold">Phone:</p>
            <a className="hover:text-red-600" href="/">
              +62 000-0000-0000
            </a>
          </li>
          <li className="flex gap-2">
            <div className="min-h-fit min-w-fit">
              <TbWorldWww size={20} />
            </div>
            <p className="font-bold">Website:</p>
            <a className="hover:text-red-600" href="https://dizeto.vercel.app/" rel="noopener noreferrer" target="_blank">
              https://dizeto.vercel.app/
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
