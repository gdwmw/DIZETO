import { FC, ReactElement } from "react";

import Link from "next/link";

import { dbPricing } from "@/database/database";
import { ButtonTWM } from "@/interfaces/buttons/button";

export const PriceCard: FC = (): ReactElement => {
  return (
    <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {dbPricing.map((data) => (
        <div className="price-card" key={data.id}>
          <div className="relative flex h-40 w-full flex-col items-center justify-end bg-gray-200 dark:bg-gray-700 dark:text-white">
            <div className="price-card-circle">
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
                  <Link className={ButtonTWM({})} href={"/"}>
                    BOOKING
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
