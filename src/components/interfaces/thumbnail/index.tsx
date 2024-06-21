import { FC, ReactElement } from "react";

import Image from "next/image";

type T = {
  setImageIndex: () => void;
  setOpenImageDetail: (param: boolean) => void;
  src: string;
};

export const Thumbnail: FC<T> = ({ setImageIndex, setOpenImageDetail, src }): ReactElement => {
  return (
    <button
      className="size-fit max-h-[350px] max-w-[350px] border-2 border-gray-300 bg-white p-1 hover:border-red-700 active:scale-95 active:border-red-800 dark:border-gray-700 dark:bg-dark"
      onClick={() => {
        setImageIndex();
        setOpenImageDetail(true);
      }}
      type="button"
    >
      <Image alt="Thumbnail" height={500} src={src} width={500} />
    </button>
  );
};
