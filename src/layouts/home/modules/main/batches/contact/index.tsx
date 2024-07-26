"use client";

import { FC, ReactElement, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { FaEdit } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

import { Button } from "@/src/components/interfaces/buttons/button";
import { ContactInfo } from "@/src/components/interfaces/contact-info";
import { ContainerPaper, ContentPaper } from "@/src/components/interfaces/paper";
import { Title } from "@/src/components/interfaces/title";
import { GETContact, GETTitle } from "@/src/utils/api";
const ContactForm = dynamic(() => import("../forms/contact-form"));

export const Contact: FC = (): ReactElement => {
  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataContact } = useQuery({
    queryFn: GETContact,
    queryKey: ["GETContact"],
  });

  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <ContainerPaper id="contact">
        <ContentPaper className="relative">
          <Button className="absolute right-3 top-3" color="black" onClick={() => setOpenForm(true)} size="sm" type="button" variant="ghost">
            <FaEdit />
          </Button>

          <Title title={dataTitle?.[4].title} titleRed={dataTitle?.[4].titleRed} />

          <iframe
            className="my-5 h-[500px] w-full rounded-md border border-black dark:border-white"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.143343315141!2d107.6504268!3d-6.8863111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1697306682702!5m2!1sid!2sid"
            title="Google Maps"
          />

          <div className="space-y-2">
            <ContactInfo href={dataContact?.[0].href} icon={<MdLocationOn size={20} />} label={dataContact?.[0].label} title="Address" />
            <ContactInfo href={dataContact?.[1].href} icon={<MdEmail size={20} />} label={dataContact?.[1].label} title="Email" />
            <ContactInfo href={dataContact?.[2].href} icon={<MdPhone size={20} />} label={dataContact?.[2].label} title="Phone" />
            <div className="hidden sm:block">
              <ContactInfo href={dataContact?.[3].href} icon={<TbWorldWww size={20} />} label={dataContact?.[3].label} title="Website" />
            </div>
          </div>
        </ContentPaper>
      </ContainerPaper>

      {openForm && <ContactForm data={dataContact} setOpenForm={setOpenForm} title={dataTitle?.[4]} />}
    </>
  );
};
