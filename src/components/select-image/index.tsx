"use client";

import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { CgClose } from "react-icons/cg";

import { TAboutSchema } from "@/src/schemas/home";
import { GETSelectImage } from "@/src/utils/api";

import { Button } from "../interfaces/button";
import { ContentModal } from "../interfaces/modal";
import { Title } from "../interfaces/title";

// TODO: Nanti buat testing dan storybook nya

// TODO: Nanti periksa apakah type pada kode yang lain sudah tepat seperti ini?
interface I {
  setOpenSelectImage: Dispatch<SetStateAction<boolean>>;
  setValue: UseFormSetValue<TAboutSchema>;
}

const SelectImage: FC<I> = (props): ReactElement => {
  const { data } = useQuery({
    queryFn: GETSelectImage,
    queryKey: ["GETSelectImage"],
  });

  return (
    <ContentModal className="relative max-w-[1000px]">
      <Button className="sticky top-0 z-[1] ml-auto" color="black" onClick={() => props.setOpenSelectImage(false)} size="sm" variant="ghost">
        <CgClose size={25} />
      </Button>

      <Title className="mt-[-25px]" redColor={7} title="SELECT IMAGE" />

      <section className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((dt) => (
          <button
            className="flex items-center justify-center rounded-md p-3 ring-1 ring-gray-300 hover:ring-red-600 active:scale-95 active:ring-red-600 dark:ring-gray-700"
            key={dt.id}
            onClick={() => {
              // TODO: Harus seperti ini jika memungkinkan agar konsisten
              props.setValue("data.image.id", dt.id);
              props.setValue("data.image.url", dt.url);
              props.setOpenSelectImage(false);
            }}
            type="button"
          >
            {/* TODO: Nanti optimasi kode gambar jadi seperti ini */}
            <div className="relative size-[250px]">
              <Image alt="Image" className="object-contain" fill loading="lazy" quality={30} src={dt.url} />
            </div>
          </button>
        ))}
      </section>
    </ContentModal>
  );
};

export default SelectImage;
