"use client";

import { FC, ReactElement, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";

type TImagesFrameProps = {
  copyright: string;
  database: string[];
  folder: string;
  link: string;
};

export const ImagesFrame: FC<TImagesFrameProps> = ({ copyright, database, folder, link }): ReactElement => {
  const [dataIndex, setDataIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const [isImageLoadingInteractive, setIsImageLoadingInteractive] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setImageLoaded(false);
        setIsImageLoading(true);
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

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const startTimeout = () => {
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => {
      setIsImageLoading(false);
    }, 1500);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
    setIsImageLoadingInteractive(false);
    startTimeout();
  };

  const handlePreviousImage = () => {
    if (dataIndex > 0) {
      setDataIndex(dataIndex - 1);
      setIsImageLoadingInteractive(true);
    }
  };

  const handleNextImage = () => {
    if (dataIndex < database.length - 1) {
      setDataIndex(dataIndex + 1);
      setIsImageLoadingInteractive(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="gap-5 sm:columns-2 md:columns-3 lg:columns-4">
          {database.map((image, index) => (
            <div
              className={`thumbnail ${index === 0 ? "" : "mt-5"}`}
              key={index}
              onClick={() => {
                setDataIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                alt={image}
                className="rounded-sm"
                placeholder="blur"
                priority
                quality={30}
                src={require(`@/public/assets/images/thumbnails/${folder}/${image}`)}
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="detail-photo-background">
          <div>
            <div className="photo-frame" ref={menuRef}>
              <button
                className={dataIndex !== 0 ? "photo-frame-previous-button" : "hidden"}
                disabled={isImageLoadingInteractive}
                onClick={handlePreviousImage}
                type="button"
              >
                <FaChevronLeft size={50} />
              </button>
              <button
                className={dataIndex + 1 !== database.length ? "photo-frame-next-button" : "hidden"}
                disabled={isImageLoadingInteractive}
                onClick={handleNextImage}
                type="button"
              >
                <FaChevronRight size={50} />
              </button>
              {isImageLoading && (
                <div className="detail-photo-loading">
                  <Image alt="Loading..." height={100} loading="lazy" quality={30} src={loadingAnimation} width={100} />
                </div>
              )}
              <div className={`detail-photo-loading-interactive ${isImageLoadingInteractive ? "opacity-100" : "opacity-0"}`}>
                <Image alt="Loading..." height={100} loading="lazy" quality={30} src={loadingAnimation} width={100} />
              </div>
              <div className="size-fit">
                <Image
                  alt={database[dataIndex]}
                  className="size-fit transition-all duration-1000"
                  height={10000}
                  loading="lazy"
                  onLoadCapture={handleImageLoaded}
                  src={`${link}${database[dataIndex]}`}
                  style={{ maxHeight: imageLoaded ? "90dvh" : "0dvh", maxWidth: imageLoaded ? "90dvw" : "0dvw" }}
                  width={10000}
                />
              </div>
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
};
