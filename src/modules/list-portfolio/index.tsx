"use client";

import { ButtonCVA, Footer } from "@/components";
import { dbSortedListPortfolio } from "@/database/database";
import { cn } from "@/libs";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export const ListPortfolio: FC = (): ReactElement => {
  const itemsPerPage: number = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(dbSortedListPortfolio.length / itemsPerPage);

  const getDataForPage = () => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return dbSortedListPortfolio.slice(startIndex, endIndex);
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
              <div className="h-fit w-fit">
                <h2 className="text-4xl font-semibold">
                  PORTFOL<span className="text-red-600">IO</span>
                </h2>
                <p className="text-end text-lg font-semibold">- DIZETO -</p>
              </div>
              <div className="hidden items-center justify-center gap-5 md:flex">
                <Link
                  href={"/"}
                  aria-label="Landing Page"
                  className={cn(ButtonCVA({ className: "flex h-10 w-10 items-center justify-center px-0 py-0 text-lg" }))}
                >
                  <FaArrowLeft size={18} />
                </Link>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handlePageChange(i + 1)}
                    className={cn(
                      ButtonCVA({
                        className: `h-10 w-10 px-0 py-0 text-lg ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-red-600"}`,
                      }),
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="h-0.5 w-full rounded-full bg-red-600" />
            </section>
            <section className="mb-6 mt-5 flex items-center justify-center gap-5 md:hidden">
              <Link
                href={"/"}
                aria-label="Landing Page"
                className={cn(ButtonCVA({ className: "flex h-10 w-10 items-center justify-center px-0 py-0 text-lg" }))}
              >
                <FaArrowLeft size={18} />
              </Link>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handlePageChange(i + 1)}
                  className={cn(
                    ButtonCVA({
                      className: `h-10 w-10 px-0 py-0 text-lg ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-red-600"}`,
                    }),
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </section>
          </header>

          <main className="flex items-start justify-center">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {getDataForPage().map((data) => (
                <Link key={data.id} href={`/listportfolio/${data.link}`}>
                  <div className="portfolio-card">
                    <Image
                      src={require(`@/public/assets/images/thumbnails/portfolio/${data.image}`)}
                      alt="Portfolio"
                      height={300}
                      width={300}
                      quality={30}
                      priority
                      placeholder="blur"
                      className="rounded-md"
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
