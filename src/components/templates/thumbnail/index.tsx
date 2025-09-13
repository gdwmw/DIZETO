"use client";

import { FC, PropsWithChildren, ReactElement } from "react";

import { useGlobalStates } from "@/src/context";
import { twm } from "@/src/libs";

interface I extends PropsWithChildren {
  className?: string;
  index: number;
}

export const Thumbnail: FC<I> = (props): ReactElement => {
  const { setImageIndex, setOpenImageDetail } = useGlobalStates();

  return (
    <button
      className={twm(
        "border-2 border-gray-300 bg-white p-1 hover:border-red-700 active:scale-95 active:border-red-800 dark:border-gray-700 dark:bg-dark",
        props.className,
      )}
      onClick={() => {
        setImageIndex(props.index);
        setOpenImageDetail(true);
      }}
      type="button"
    >
      {props.children}
    </button>
  );
};
