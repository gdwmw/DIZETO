import { FC, ReactElement } from "react";

import { IPricing } from "@/utils";

export const CardPackage: FC<IPricing> = ({ ...data }): ReactElement => {
  return (
    <section className="size-full pt-20 dark:text-white">
      <div className="relative z-0 size-full rounded-lg transition-card hover:scale-105 hover:shadow-md hover:shadow-black/50 dark:hover:shadow-white/50">
        <div className="absolute top-[-60px] flex h-fit w-full items-center justify-center sm:top-[-70px]">
          <div className="flex size-[118px] flex-col items-center justify-center rounded-full border-4 border-gray-200 bg-red-600 text-center text-white sm:size-[138px] dark:border-gray-700">
            <span className="text-2xl font-bold sm:text-3xl" data-testid="price">
              IDR {data.price}
            </span>
            <span className="text-sm font-semibold sm:text-base sm:tracking-wider" data-testid="pack">
              PACKAGE {data.pack}
            </span>
          </div>
        </div>

        <div className="size-full overflow-hidden rounded-lg border-4 border-gray-200 bg-white dark:border-gray-700 dark:bg-dark">
          <div className="bg-gray-200 pb-5 pt-20 dark:bg-gray-700">
            <span className="block whitespace-pre-wrap text-center text-xl font-semibold sm:text-2xl" data-testid="category">
              {data.category}
            </span>
          </div>

          <ul className="space-y-5 p-5 text-center text-base font-semibold sm:text-lg">
            {data.listItem.map((dt) =>
              dt.list.map((ls, index) => (
                <li key={index}>
                  <span>
                    <span className="text-red-600" data-testid="qty">
                      {ls.qty}
                    </span>{" "}
                    <span data-testid="label">{ls.label}</span>
                  </span>
                </li>
              )),
            )}

            <li>
              <span>
                SENT VIA
                <br />
                GOOGLE DRIVE
                <br />
                (EXPIRED <span className="text-red-600">7</span> DAYS)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
