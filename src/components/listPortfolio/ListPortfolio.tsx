import { sortedListPortfolio } from "@/database/database";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function ListPortfolio() {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedListPortfolio.length / itemsPerPage);
  const getDataForPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedListPortfolio.slice(startIndex, endIndex);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="container mx-auto px-5 py-10">
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
              <Link href={"/"} aria-label="Landing Page" className="back-red-line-button">
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
            </div>
            <div className="h-0.5 w-full rounded-full bg-red-600" />
          </section>
          <div className="mb-6 mt-5 flex items-center justify-center gap-5 md:hidden">
            <Link href={"/"} aria-label="Landing Page" className="back-red-line-button">
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
          </div>
        </header>

        <main className="flex items-start justify-center">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {getDataForPage().map((data) => (
              <Link key={data.id} href={`/listportfolio/${data.link}`}>
                <div className="portfolio-card">
                  <Image
                    src={require(`@/assets/images/thumbnail/portfolio/${data.image}`)}
                    alt="Test"
                    height={300}
                    width={300}
                    quality={30}
                    placeholder="blur"
                    priority
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
  );
}
