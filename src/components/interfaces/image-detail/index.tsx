"use client";

import { FC, ReactElement, SetStateAction, useEffect, useState } from "react";

import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import loading from "@/public/assets/animations/loadings/loading.svg";

import { Button } from "../buttons/button";

export type TImageDetail = {
  data: any;
  imageIndex: number;
  setImageIndex: (param: SetStateAction<number>) => void;
  setOpenImageDetail: (param: boolean) => void;
};

const ImageDetail: FC<TImageDetail> = ({ data, imageIndex, setImageIndex, setOpenImageDetail }): ReactElement => {
  const [loaded, setLoaded] = useState(false);
  const [transitionLoaded, setTransitionLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (loaded && imageIndex >= 1 && e.key === "ArrowLeft") {
        setImageIndex((prev) => prev - 1);
        setTransitionLoaded((prev) => !prev);
      }
      if (loaded && data && data.imageFile && imageIndex < data.imageFile.length - 1 && e.key === "ArrowRight") {
        setImageIndex((prev) => prev + 1);
        setTransitionLoaded((prev) => !prev);
      }
      if (loaded && e.key === "Escape") {
        setOpenImageDetail(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [loaded, imageIndex, data]);

  return (
    <section className="fixed left-0 top-0 z-10 flex h-dvh w-dvw items-center justify-center bg-black/30 p-5 backdrop-blur-md dark:bg-white/20">
      <div>
        <div className="relative size-fit overflow-hidden border-2 border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-dark">
          <div
            className={`absolute left-0 top-0 z-[9] flex size-full items-center justify-center bg-white transition-opacity duration-500 dark:bg-dark ${loaded && transitionLoaded ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <Image alt="Loading..." src={loading} width={100} />
          </div>

          {loaded && (
            <Button
              className="pointer-events-auto absolute right-5 top-5 z-[8]"
              color="white"
              onClick={() => {
                setOpenImageDetail(false);
              }}
              size="sm"
              type="button"
              variant="ghost"
            >
              <CgClose size={30} />
            </Button>
          )}

          {loaded && imageIndex >= 1 && (
            <Button
              className="absolute left-0 top-0 size-full max-w-[30%] pl-3 sm:pl-12"
              color="white"
              onClick={() => {
                setImageIndex((prev) => prev - 1);
                setTransitionLoaded((prev) => !prev);
              }}
              size="sm"
              type="button"
              variant="ghost"
            >
              <IoIosArrowBack size={50} />
            </Button>
          )}

          {loaded && data && data.imageFile && imageIndex < data.imageFile.length - 1 && (
            <Button
              className="absolute right-0 top-0 size-full max-w-[30%] justify-end pr-3 sm:pr-12"
              color="white"
              onClick={() => {
                setImageIndex((prev) => prev + 1);
                setTransitionLoaded((prev) => !prev);
              }}
              size="sm"
              type="button"
              variant="ghost"
            >
              <IoIosArrowForward size={50} />
            </Button>
          )}

          <Image
            alt="Image"
            className={`transition-all ${loaded ? "size-fit max-h-[90vh] max-w-[90vw]" : "size-[200px] max-h-[200px] max-w-[200px] sm:size-[300px] sm:max-h-[300px] sm:max-w-[300px]"}`}
            height={2000}
            onLoad={() => {
              setLoaded(true);
              setTransitionLoaded((prev) => !prev);
            }}
            src={data?.imageFile?.[imageIndex]?.imgUrl ?? ""}
            width={2000}
          />
        </div>

        <div className="bottom-5 left-5 text-xs text-white sm:text-sm dark:text-black">
          <span>{data?.copyright}</span>
          <br />
          <span>
            Image {imageIndex + 1} of {data?.imageFile?.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImageDetail;
