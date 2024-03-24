"use client";

import { ButtonCVA } from "@/components";
import { dbPortfolio, dbPortfolioPathIndex } from "@/database/database";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { ImagesFrame } from "./images-frame";

type TPortfolio = {
  path: string;
};

export const Portfolio: FC<TPortfolio> = ({ path }): ReactElement => {
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
    <div className="container mx-auto px-5 pt-10">
      <div className="paper-portfolio">
        <header>
          <section className="flex items-center justify-center gap-5">
            <div className="h-fit w-fit">
              <h2 className="whitespace-nowrap text-4xl font-semibold">
                {dbPortfolio[index].tit2}
                <span className="text-red-600">{dbPortfolio[index].tit3}</span>
              </h2>
              <p className="text-end text-lg font-semibold">{dbPortfolio[index].dt}</p>
            </div>
            <div className="h-0.5 w-full rounded-full bg-red-600" />
          </section>
          <section className="mb-6 mt-5 flex items-center justify-center gap-5">
            <Link href={"/listportfolio"} className={ButtonCVA({ className: "flex h-10 w-10 items-center justify-center px-0 py-0 text-lg" })}>
              <FaArrowLeft size={18} />
            </Link>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handlePageChange(i + 1)}
                className={ButtonCVA({
                  className: `h-10 w-10 px-0 py-0 text-lg ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-red-600"}`,
                })}
              >
                {i + 1}
              </button>
            ))}
          </section>
        </header>
        <main>
          <ImagesFrame
            folder={`portfolio/${dbPortfolio[index].fldr}`}
            database={getDataForPage().map((data) => data)}
            link={`https://dizeto-images.vercel.app/assets/images/portfolio/${dbPortfolio[index].fldr}/`}
            copyright={dbPortfolio[index].cc}
          />
        </main>
      </div>
    </div>
  );
};
