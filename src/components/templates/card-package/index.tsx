"use client";

import Link from "next/link";
import { FC, ReactElement } from "react";

import { IPricing } from "@/src/types";

import { ButtonTWM } from "../../";

interface I {
  bookingHref?: string;
  data: IPricing;
}

export const CardPackage: FC<I> = (props): ReactElement => {
  const formatPrice = (price: number | undefined) => {
    if (price === undefined) {
      return "Loading...";
    }
    return `IDR ${new Intl.NumberFormat("en-US", { minimumFractionDigits: 0 }).format(price)}`;
  };

  return (
    <section className="h-full pt-20 dark:text-white">
      <div className="relative h-full rounded-lg transition-card hover:scale-105 hover:shadow-md hover:shadow-black/50 dark:hover:shadow-white/50">
        <div className="absolute inset-x-0 top-[-50px] flex items-center justify-center sm:top-[-60px]">
          <div className="flex h-[100px] w-fit flex-col items-center justify-center rounded-full border-4 border-gray-200 bg-red-600 px-8 text-center text-white sm:h-[120px] sm:px-10 dark:border-gray-700">
            <span className="text-2xl font-bold sm:text-3xl" data-testid="price">
              {formatPrice(props.data.price)}
            </span>
            <span className="font-semibold sm:text-base sm:tracking-wider" data-testid="package">
              PACKAGE {props.data.package}
            </span>
          </div>
        </div>

        <div className="h-full overflow-hidden rounded-lg border-4 border-gray-200 bg-white dark:border-gray-700 dark:bg-dark">
          <div className="bg-gray-200 pb-3 pt-[53px] sm:pb-5 sm:pt-[68px] dark:bg-gray-700">
            <span className="block whitespace-pre-line text-center text-xl font-semibold sm:text-2xl" data-testid="category">
              {props.data.category}
            </span>
          </div>

          <ul className="space-y-5 p-5 text-center text-base font-semibold sm:text-lg">
            {props.data.listItem.map((dt) =>
              dt.list.map((ls, index) => (
                <li key={index}>
                  <span className="text-red-600" data-testid="qty">
                    {ls.qty}
                  </span>{" "}
                  <span data-testid="label">{ls.label}</span>
                </li>
              )),
            )}

            <li>
              <span className="whitespace-pre-line">
                {`SENT VIA\nGOOGLE DRIVE\n`}
                (EXPIRED <span className="text-red-600">7</span> DAYS)
              </span>
            </li>
            <li>
              <Link
                className={ButtonTWM({ className: "mx-auto w-full max-w-52", color: "red", size: "sm", variant: "outline" })}
                href={props.bookingHref ?? "/"}
              >
                BOOKING
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
