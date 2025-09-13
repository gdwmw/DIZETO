"use client";

import Image from "next/image";
import { FC, ReactElement, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { CgClose } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import loading from "@/public/assets/animations/loadings/loading.svg";
import { IHighlightResponse, IPortfolioResponse } from "@/src/types";

import { Button } from "../../";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface I {
  data: IHighlightResponse[] | IPortfolioResponse[];
  imageIndex: number;
  setImageIndex: (param: number) => void;
  setOpenImageDetail: (param: boolean) => void;
}

export const ImageDetail: FC<I> = (props): ReactElement => {
  const [loaded, setLoaded] = useState(false);
  const [transitionLoaded, setTransitionLoaded] = useState(false);

  const sortedImage = props.data[0].image.slice().sort((a, b) => {
    const numA = parseInt(/\d+/.exec(a.name)?.[0] ?? "0", 10);
    const numB = parseInt(/\d+/.exec(b.name)?.[0] ?? "0", 10);
    return numA - numB;
  });

  useHotkeys("left", () => {
    if (loaded && props.imageIndex >= 1) {
      props.setImageIndex(props.imageIndex - 1);
      setTransitionLoaded((prev) => !prev);
    }
  });

  useHotkeys("right", () => {
    if (loaded && sortedImage && props.imageIndex < sortedImage.length - 1) {
      props.setImageIndex(props.imageIndex + 1);
      setTransitionLoaded((prev) => !prev);
    }
  });

  useHotkeys("esc", () => {
    if (loaded) {
      props.setOpenImageDetail(false);
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
                props.setOpenImageDetail(false);
              }}
              size="sm"
              type="button"
              variant="ghost"
            >
              <CgClose size={25} />
            </Button>
          )}

          {loaded && props.imageIndex >= 1 && (
            <Button
              className="absolute inset-y-0 left-0 w-full max-w-[30%] pl-3 sm:pl-12"
              color="white"
              onClick={() => {
                props.setImageIndex(props.imageIndex - 1);
                setTransitionLoaded((prev) => !prev);
              }}
              size="sm"
              type="button"
              variant="ghost"
            >
              <IoIosArrowBack size={50} />
            </Button>
          )}

          {loaded && sortedImage && props.imageIndex < sortedImage.length - 1 && (
            <Button
              className="absolute inset-y-0 right-0 w-full max-w-[30%] justify-end pr-3 sm:pr-12"
              color="white"
              onClick={() => {
                props.setImageIndex(props.imageIndex + 1);
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
            height={sortedImage[props.imageIndex].height}
            onLoad={() => {
              setLoaded(true);
              setTransitionLoaded((prev) => !prev);
            }}
            src={API_URL + sortedImage[props.imageIndex].url}
            unoptimized
            width={sortedImage[props.imageIndex].width}
          />
        </div>

        <div className="bottom-5 left-5 text-xs font-semibold text-white sm:text-sm dark:text-black">
          <span>&copy; 2020 DIZETO. All rights reserved.</span>
          <br />
          <span>
            Image {props.imageIndex + 1} of {sortedImage.length}
          </span>
        </div>
      </div>
    </section>
  );
};
