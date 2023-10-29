"use client";

import loadingAnimation from "@/assets/loading/loading.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ImagesFrameProps = {
  folder: string;
  database: string[];
  link: string;
  copyright: string;
};

export default function ImagesFrame({ folder, database, link, copyright }: ImagesFrameProps) {
  let [dataIndex, setDataIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingInteractive, setIsLoadingInteractive] = useState<boolean>(false);
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
    setIsLoadingInteractive(false);
    ATimeout();
  };

  const handlePreviousImage = () => {
    if (dataIndex > 0) {
      setDataIndex(dataIndex - 1);
      setIsLoadingInteractive(true);
    }
  };

  const handleNextImage = () => {
    if (dataIndex < database.length - 1) {
      setDataIndex(dataIndex + 1);
      setIsLoadingInteractive(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="gap-5 sm:columns-2 md:columns-3 lg:columns-4">
          {database.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setDataIndex(index);
                setIsOpen(true);
              }}
              className={`thumbnail ${index === 0 ? "" : "mt-5"}`}
            >
              <Image
                src={require(`@/assets/images/thumbnail/${folder}/${image}`)}
                alt={image}
                quality={30}
                placeholder="blur"
                priority
                className="rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="detail-photo-background">
          <div>
            <div ref={menuRef} className="photo-frame">
              <button
                type="button"
                onClick={handlePreviousImage}
                className={dataIndex !== 0 ? "photo-frame-previous-button" : "hidden"}
                disabled={!!isLoadingInteractive}
              >
                <FaChevronLeft size={50} />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className={dataIndex + 1 !== database.length ? "photo-frame-next-button" : "hidden"}
                disabled={!!isLoadingInteractive}
              >
                <FaChevronRight size={50} />
              </button>
              {isLoading && (
                <div className="detail-photo-loading">
                  <Image src={loadingAnimation} alt="Loading..." height={100} width={100} quality={30} loading="lazy" />
                </div>
              )}
              <div className={`detail-photo-loading-interactive ${isLoadingInteractive ? "opacity-100" : "opacity-0"}`}>
                <Image src={loadingAnimation} alt="Loading..." height={100} width={100} quality={30} loading="lazy" />
              </div>
              <Image
                src={`${link}${database[dataIndex]}`}
                alt={database[dataIndex]}
                height={1000}
                width={1000}
                loading="lazy"
                onLoadCapture={handleImageLoaded}
                className="h-fit w-fit transition-all duration-1000"
                style={{ maxHeight: imageLoaded ? "1000px" : "0px", maxWidth: imageLoaded ? "1000px" : "0px" }}
              />
            </div>
            <div className="ml-1 text-sm font-semibold text-white dark:text-dark">
              <p>{copyright}</p>
              <p>{`Image ${dataIndex + 1} of ${database.length}`}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
