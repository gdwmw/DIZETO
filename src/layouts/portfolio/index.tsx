"use client";

import { FC, ReactElement, useState } from "react";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { dbPortfolio, dbPortfolioPathIndex } from "@/database/database";
import { ButtonTWM } from "@/interfaces/buttons/button";
import { Footer } from "@/interfaces/footer";
import { twm } from "@/libs";

import { ImagesFrame } from "./modules/main/batches";

type TPortfolioLayout = {
  path: string;
};

export const PortfolioLayout: FC<TPortfolioLayout> = ({ path }): ReactElement => {
  const index: number = dbPortfolioPathIndex(path);
  const totalData: string[] = [];
  for (let i: number = 1; i <= dbPortfolio[index].tdat; i++) {
    totalData.push(`DZT_CC${i}.webp`);
  }

  const itemsPerPage: number = 50;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(totalData.length / itemsPerPage);

  const getDataForPage = () => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return totalData.slice(startIndex, endIndex);
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
                <h2 className="whitespace-nowrap text-4xl font-semibold">
                  {dbPortfolio[index].tit2}
                  <span className="text-red-600">{dbPortfolio[index].tit3}</span>
                </h2>
                <p className="text-end text-lg font-semibold">{dbPortfolio[index].dt}</p>
              </div>
              <div className="h-0.5 w-full rounded-full bg-red-600" />
            </section>
            <section className="mb-6 mt-5 flex items-center justify-center gap-5">
              <Link
                className={twm(ButtonTWM({ className: "flex h-10 min-w-10 items-center justify-center px-0 py-0 text-lg" }))}
                href={"/portfoliolist"}
              >
                <FaArrowLeft size={18} />
              </Link>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  className={twm(
                    ButtonTWM({
                      className: `h-10 min-w-10 px-0 py-0 text-lg ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-red-600"}`,
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
          <main>
            <ImagesFrame
              copyright={dbPortfolio[index].cc}
              database={getDataForPage().map((data) => data)}
              folder={`portfolio/${dbPortfolio[index].fldr}`}
              link={`https://dizeto-images.vercel.app/assets/images/portfolio/${dbPortfolio[index].fldr}/`}
            />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};
