"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

import Image from "next/image";

import { twm } from "@/libs";

type TThumbnail = {
  className?: string;
  setImageIndex: () => void;
  setOpenImageDetail: (param: boolean) => void;
  src: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Thumbnail: FC<TThumbnail> = ({ className, setImageIndex, setOpenImageDetail, src, ...props }): ReactElement => {
  return (
    <button
      className={twm(
        "max-h-[350px] w-fit max-w-[350px] border-2 border-gray-300 bg-white p-1 hover:border-red-700 active:scale-95 active:border-red-800 dark:border-gray-700 dark:bg-dark",
        className,
      )}
      data-testid="thumbnail"
      onClick={() => {
        setImageIndex();
        setOpenImageDetail(true);
      }}
      type="button"
      {...props}
    >
      <Image alt="Thumbnail" height={224.094} src={src} width={336.5} />
    </button>
  );
};
