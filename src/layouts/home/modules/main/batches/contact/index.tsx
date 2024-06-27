"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

import { ContactInfo } from "@/interfaces/contact-info";
import { ContainerPaper, ContentPaper } from "@/interfaces/paper";
import { Title } from "@/interfaces/title";
import { GETContact, GETTitle } from "@/utils";

export const Contact: FC = (): ReactElement => {
  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataContact } = useQuery({
    queryFn: GETContact,
    queryKey: ["GETContact"],
  });

  return (
    <ContainerPaper id="contact">
      <ContentPaper>
        <Title title={dataTitle?.[4].title} titleRed={dataTitle?.[4].titleRed} />
        <iframe
          className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.143343315141!2d107.6504268!3d-6.8863111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1697306682702!5m2!1sid!2sid"
          title="Google Maps"
        />
        <div className="space-y-2">
          <ContactInfo href={dataContact?.addressUrl} icon={<MdLocationOn size={20} />} label={dataContact?.addressLabel} title="Address" />
          <ContactInfo href={dataContact?.emailUrl} icon={<MdEmail size={20} />} label={dataContact?.emailLabel} title="Email" />
          <ContactInfo href={dataContact?.phoneUrl} icon={<MdPhone size={20} />} label={dataContact?.phoneLabel} title="Phone" />
          <div className="hidden sm:block">
            <ContactInfo href={dataContact?.websiteUrl} icon={<TbWorldWww size={20} />} label={dataContact?.websiteLabel} title="Website" />
          </div>
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
