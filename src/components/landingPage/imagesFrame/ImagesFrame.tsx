"use client";

// IMPORT LIBRARIES
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// IMPORT COMPONENTS
import imgLoading from "@/assets/loading/loading.svg";

type ImagesFrameProps = {
  folder: string;
  database: string[];
};

export default function ImagesFrame({ folder, database }: ImagesFrameProps) {
  let [dataIndex, setDataIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setImageLoaded(false);
        setIsLoading(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const ATimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
    ATimeout();
  };

  const PreviousImage = () => {
    if (dataIndex > 0) {
      setDataIndex(dataIndex - 1);
    }
  };

  const NextImage = () => {
    if (dataIndex < database.length - 1) {
      setDataIndex(dataIndex + 1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {database.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setDataIndex(index);
                setIsOpen(true);
              }}
              className="h-fit w-fit rounded-sm border-2 bg-white p-1 hover:border-red-600 dark:border-gray-700 dark:bg-dark dark:hover:border-red-600"
            >
              <Image src={require(`@/assets/images/thumbnail/${folder}/${image}`)} alt={image} className="rounded-sm" />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-dark/50 px-5 backdrop-blur-md dark:bg-white/20">
          <div ref={menuRef} className="relative">
            <div
              onClick={PreviousImage}
              className="absolute left-0 flex h-full w-56 items-center justify-start pl-5 text-white opacity-0 hover:opacity-100 dark:text-dark"
            >
              <FaChevronLeft size={50} />
            </div>
            <div
              onClick={NextImage}
              className="absolute right-0 flex h-full w-56 items-center justify-end pr-5 text-white opacity-0 hover:opacity-100 dark:text-dark"
            >
              <FaChevronRight size={50} />
            </div>
            <div
              className={`flex h-fit min-h-[300px] w-fit min-w-[300px] items-center justify-center border-2 bg-white p-1 dark:border-gray-700 dark:bg-dark ${
                isLoading && "relative"
              }`}
            >
              {isLoading && (
                <div className="absolute flex h-full w-full items-center justify-center bg-white dark:bg-dark">
                  <Image src={imgLoading} alt="Loading" height={100} width={100} />
                </div>
              )}
              <Image
                src={`https://dizeto-images.vercel.app/assets/uploads/dashboard/f1/${database[dataIndex]}`}
                alt={database[dataIndex]}
                height={imageLoaded ? 1000 : 200}
                width={imageLoaded ? 1000 : 200}
                onLoad={handleImageLoaded}
                className="transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
