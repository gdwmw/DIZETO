"use client";

import { FC, ReactElement, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { ButtonCVA, Footer } from "@/components";
import { dbSortedPortfolioList } from "@/database/database";
import { cn } from "@/libs";

export const PortfolioList: FC = (): ReactElement => {
  const itemsPerPage: number = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(dbSortedPortfolioList.length / itemsPerPage);

  const getDataForPage = () => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return dbSortedPortfolioList.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container mx-auto px-5 pt-10">
        <div className="paper-portfolio">
          <header>
            <section className="flex items-center justify-center gap-5">
              <div className="size-fit">
                <h2 className="text-4xl font-semibold">
                  PORTFOL<span className="text-red-600">IO</span>
                </h2>
                <p className="text-end text-lg font-semibold">- DIZETO -</p>
              </div>
              <div className="hidden items-center justify-center gap-5 md:flex">
                <Link
                  aria-label="Landing Page"
                  className={cn(ButtonCVA({ className: "flex h-10 w-10 items-center justify-center px-0 py-0 text-lg" }))}
                  href={"/"}
                >
                  <FaArrowLeft size={18} />
                </Link>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    className={cn(
                      ButtonCVA({
                        className: `h-10 w-10 px-0 py-0 text-lg ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-red-600"}`,
                      }),
                    )}
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    type="button"
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="h-0.5 w-full rounded-full bg-red-600" />
            </section>
            <section className="mb-6 mt-5 flex items-center justify-center gap-5 md:hidden">
              <Link
                aria-label="Landing Page"
                className={cn(ButtonCVA({ className: "flex h-10 w-10 items-center justify-center px-0 py-0 text-lg" }))}
                href={"/"}
              >
                <FaArrowLeft size={18} />
              </Link>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  className={cn(
                    ButtonCVA({
                      className: `h-10 w-10 px-0 py-0 text-lg ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-red-600"}`,
                    }),
                  )}
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  type="button"
                >
                  {i + 1}
                </button>
              ))}
            </section>
          </header>

          <main className="flex items-start justify-center">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {getDataForPage().map((data) => (
                <Link href={`/portfoliolist/${data.link}`} key={data.id}>
                  <div className="portfolio-card">
                    <Image
                      alt="Portfolio"
                      className="rounded-md"
                      height={300}
                      placeholder="blur"
                      priority
                      quality={30}
                      src={require(`@/public/assets/images/thumbnails/portfolio/${data.image}`)}
                      width={300}
                    />
                    <div className="mx-auto my-3 h-0.5 w-24 rounded-full bg-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-600">{data.title}</h3>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-300">{data.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};
