"use client";

import { FC, ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

import { ContactInfo } from "@/components/interfaces/contact-info";
import { ContainerPaper, ContentPaper } from "@/components/interfaces/paper";
import { Title } from "@/components/interfaces/title";
import { GETContact } from "@/utils";

export const Contact: FC = (): ReactElement => {
  const { data } = useQuery({
    queryFn: GETContact,
    queryKey: ["GETContact"],
  });

  return (
    <ContainerPaper id="contact">
      <ContentPaper>
        <Title title="CONTA" titleRed="CT" />
        <iframe
          className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.143343315141!2d107.6504268!3d-6.8863111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1697306682702!5m2!1sid!2sid"
          title="Google Maps"
        />
        <div className="space-y-2">
          <ContactInfo href={data?.addressUrl} icon={<MdLocationOn size={20} />} label={data?.addressLabel} title="Address" />
          <ContactInfo href={data?.emailUrl} icon={<MdEmail size={20} />} label={data?.emailLabel} title="Email" />
          <ContactInfo href={data?.phoneUrl} icon={<MdPhone size={20} />} label={data?.phoneLabel} title="Phone" />
          <ContactInfo href={data?.websiteUrl} icon={<TbWorldWww size={20} />} label={data?.websiteLabel} title="Website" />
        </div>
      </ContentPaper>
    </ContainerPaper>
  );
};
