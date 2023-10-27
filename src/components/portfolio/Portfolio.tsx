"use client";

import ImagesFrame from "./imagesFrame/ImagesFrame";
import { dbPortfolioPathIndex, dbPortfolio } from "@/database/database";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Portfolio({ path }: { path: any }) {
  const totalData: string[] = [];
  for (let i = 1; i <= dbPortfolio[dbPortfolioPathIndex[path.link]].tdat; i++) {
    totalData.push(`DZT_CC${i}.webp`);
  }

  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalData.length / itemsPerPage);
  const getDataForPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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
                {dbPortfolio[dbPortfolioPathIndex[path.link]].tit2}
                <span className="text-red-600">{dbPortfolio[dbPortfolioPathIndex[path.link]].tit3}</span>
              </h2>
              <p className="text-end text-lg font-semibold">{dbPortfolio[dbPortfolioPathIndex[path.link]].dt}</p>
            </div>
            <div className="h-0.5 w-full rounded-full bg-red-600" />
          </section>
          <section className="mb-6 mt-5 flex items-center justify-center gap-5">
            <Link href={"/listportfolio"} className="back-red-line-button">
              <FaArrowLeft size={18} />
            </Link>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handlePageChange(i + 1)}
                className={`pagination-red-line-button ${currentPage === i + 1 ? "bg-red-600 text-white" : "text-red-600"}`}
              >
                {i + 1}
              </button>
            ))}
          </section>
        </header>
        <main>
          <ImagesFrame
            folder={`portfolio/${dbPortfolio[dbPortfolioPathIndex[path.link]].fldr}`}
            database={getDataForPage().map((data) => data)}
            link={`https://dizeto-images.vercel.app/assets/uploads/${dbPortfolio[dbPortfolioPathIndex[path.link]].fldr}/`}
            copyright={dbPortfolio[dbPortfolioPathIndex[path.link]].cc}
          />
        </main>
      </div>
    </div>
  );
}
