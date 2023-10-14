// IMPORT LIBRARIES
import Link from "next/link";
import { pricing } from "@/database/database";

export default function PriceCard() {
  return (
    <>
      {pricing.map((data, index) => (
        <div
          key={index}
          className="mb-3 mt-20 w-full rounded-md border-4 transition-priceCard duration-75 hover:scale-[1.025] hover:shadow-lg hover:shadow-black/30 dark:border-gray-700 dark:hover:shadow-white/20"
        >
          <div className="relative flex h-40 w-full flex-col items-center justify-end bg-gray-200 dark:bg-gray-700 dark:text-white">
            <div className="absolute -top-20 z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 bg-red-600 text-white dark:border-gray-700">
              <h2 className="text-3xl font-bold">IDR {data.price}</h2>
              <p className="text-lg font-semibold">PACKAGE {data.package}</p>
            </div>
            <h3 className="mb-5 text-center text-2xl font-semibold">
              {data.title[0]}
              <br />
              {data.title[1]}
            </h3>
          </div>
          <div className="flex items-start justify-center p-5">
            <ul className="space-y-5 text-center text-lg font-semibold dark:text-white">
              {data.list.map((data, index) => (
                <li key={index}>
                  <p>
                    <span className="text-red-600">{data.qty}</span> {data.label}
                  </p>
                </li>
              ))}
              <li>
                <p>
                  SENT VIA
                  <br />
                  GOOGLE DRIVE
                  <br />
                  (EXPIRED <span className="text-red-600">7</span> DAYS)
                </p>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <Link href={"/"} className="border-2 border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white">
                    BOOKING
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
