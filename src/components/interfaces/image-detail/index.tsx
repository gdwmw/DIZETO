"use client";

import { FC, ReactElement, SetStateAction, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import loading from "@/root/public/assets/animations/loadings/loading.svg";
import { IHighlight } from "@/src/types/api";

import { Button } from "../button";

export interface IImageDetail {
  data: IHighlight | undefined;
  imageIndex: number;
  setImageIndex: (param: SetStateAction<number>) => void;
  setOpenImageDetail: (param: boolean) => void;
}

const ImageDetail: FC<IImageDetail> = ({ data, imageIndex, setImageIndex, setOpenImageDetail }): ReactElement => {
  const [loaded, setLoaded] = useState(false);
  const [transitionLoaded, setTransitionLoaded] = useState(false);

  useHotkeys("left", () => {
    if (loaded && imageIndex >= 1) {
      setImageIndex((prev) => prev - 1);
      setTransitionLoaded((prev) => !prev);
    }
  });

  useHotkeys("right", () => {
    if (loaded && data?.images && imageIndex < data.images.length - 1) {
      setImageIndex((prev) => prev + 1);
      setTransitionLoaded((prev) => !prev);
    }
  });

  useHotkeys("esc", () => {
    if (loaded) {
      setOpenImageDetail(false);
    }
  });

  return (
    <section className="fixed inset-0 z-[4] flex items-center justify-center bg-black/30 p-5 backdrop-blur-md dark:bg-white/20">
      <div>
        <div className="relative w-fit overflow-hidden border-2 border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-dark">
          <div
            className={`absolute inset-0 z-[2] flex items-center justify-center bg-white transition-opacity duration-500 dark:bg-dark ${loaded && transitionLoaded ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <Image alt="Loading..." src={loading} width={100} />
          </div>

          {loaded && (
            <Button
              className="pointer-events-auto absolute right-5 top-5 z-[1]"
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
              className="absolute inset-y-0 left-0 w-full max-w-[30%] pl-3 sm:pl-12"
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

          {loaded && data?.images && imageIndex < data.images.length - 1 && (
            <Button
              className="absolute inset-y-0 right-0 w-full max-w-[30%] justify-end pr-3 sm:pr-12"
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
            src={data?.images?.[imageIndex]?.imgURL ?? ""}
            width={2000}
          />
        </div>

        <div className="bottom-5 left-5 text-xs font-semibold text-white sm:text-sm dark:text-black">
          <span>{data?.copyright}</span>
          <br />
          <span>
            Image {imageIndex + 1} of {data?.images?.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImageDetail;
