"use client";
import Image from "next/image";

type ImagesFrameProps = {
  key: number;
  src: string;
  alt: string;
  database: any;
};

export default function ImagesFrame({ key, src, alt, database }: ImagesFrameProps) {
  return (
    <div
      key={key}
      className="h-fit w-fit rounded-sm border-2 bg-white p-1 hover:border-red-600 dark:border-gray-700 dark:bg-dark dark:hover:border-red-600"
    >
      <Image src={src} alt={alt} className="rounded-sm" />
    </div>
  );
}
