"use client";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";
import Image from "next/image";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type TImagesFrameProps = {
  folder: string;
  database: string[];
  link: string;
  copyright: string;
};

export const ImagesFrame: FC<TImagesFrameProps> = ({ folder, database, link, copyright }): ReactElement => {
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
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {database.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setDataIndex(index);
                setIsOpen(true);
              }}
              className="thumbnail"
            >
              <Image
                src={require(`@/public/assets/images/thumbnails/${folder}/${image}`)}
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
                disabled={isImageLoadingInteractive}
              >
                <FaChevronLeft size={50} />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className={dataIndex + 1 !== database.length ? "photo-frame-next-button" : "hidden"}
                disabled={isImageLoadingInteractive}
              >
                <FaChevronRight size={50} />
              </button>
              {isImageLoading && (
                <div className="detail-photo-loading">
                  <Image src={loadingAnimation} alt="Loading..." height={100} width={100} quality={30} loading="lazy" />
                </div>
              )}
              <div className={`detail-photo-loading-interactive ${isImageLoadingInteractive ? "opacity-100" : "opacity-0"}`}>
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
};
