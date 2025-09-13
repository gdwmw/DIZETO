"use client";

import { FC, ReactElement } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

import { ContactInfo, ContainerPaper, ContentPaper, Title } from "@/src/components";
import { CONTACT_DATA } from "@/src/libs";

export const Contact: FC = (): ReactElement => (
  <ContainerPaper id="contact">
    <ContentPaper>
      <Title title={"CONTACT"} />

      <iframe
        className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.143343315141!2d107.6504268!3d-6.8863111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1697306682702!5m2!1sid!2sid"
        title="Google Maps"
      />

      <div className="space-y-2">
        <ContactInfo href={CONTACT_DATA[0].href} icon={<MdLocationOn size={20} />} label={CONTACT_DATA[0].label} title="Address" />
        <ContactInfo href={CONTACT_DATA[1].href} icon={<MdEmail size={20} />} label={CONTACT_DATA[1].label} title="Email" />
        <ContactInfo href={CONTACT_DATA[2].href} icon={<MdPhone size={20} />} label={CONTACT_DATA[2].label} title="Phone" />
        <div className="hidden sm:block">
          <ContactInfo href={CONTACT_DATA[3].href} icon={<TbWorldWww size={20} />} label={CONTACT_DATA[3].label} title="Website" />
        </div>
      </div>
    </ContentPaper>
  </ContainerPaper>
);
