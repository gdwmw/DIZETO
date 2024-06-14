import { FC, ReactElement } from "react";

import Link from "next/link";

import { ButtonTWM } from "@/interfaces/buttons/button";
import { IPricing } from "@/utils/api";

type T = {
  data: IPricing[];
};

export const PriceCard: FC<T> = ({ data }): ReactElement => {
  return (
    <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {data?.map((dt) => (
        <div className="price-card" key={dt.id}>
          <div className="relative flex h-40 w-full flex-col items-center justify-end bg-gray-200 dark:bg-gray-700 dark:text-white">
            <div className="price-card-circle">
              <h2 className="text-3xl font-bold">IDR {dt.price}</h2>
              <p className="text-lg font-semibold">PACKAGE {dt.package}</p>
            </div>
            <h3 className="mb-5 text-center text-2xl font-semibold">
              {dt.titleFirstLine}
              <br />
              {dt.titleSecondLine}
            </h3>
          </div>
          <div className="flex items-start justify-center p-5">
            <ul className="space-y-5 text-center text-lg font-semibold dark:text-white">
              {dt.listItem[0].list.map((ls) => (
                <li key={ls.label}>
                  <p>
                    <span className="text-red-600">{ls.qty}</span> {ls.label}
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
