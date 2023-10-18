// IMPORT LIBRARIES
import Link from "next/link";

// IMPORT DATABASE

export default function PriceCard({ pricing, code }: { pricing: any; code: number }) {
  return (
    <>
      {pricing.map((data: any) => (
        <div key={data.id} className="price-card">
          <div className="relative flex h-40 w-full flex-col items-center justify-end bg-gray-200 dark:bg-gray-700 dark:text-white">
            <div className="price-card-circle">
              <h2 className="text-3xl font-bold">IDR {data.price}</h2>
              <p className="text-lg font-semibold">PACKAGE {data.package}</p>
            </div>
            <h3 className="mb-5 text-center text-2xl font-semibold">
              {data.title.lang[code][0]}
              <br />
              {data.title.lang[code][1]}
            </h3>
          </div>
          <div className="flex items-start justify-center p-5">
            <ul className="space-y-5 text-center text-lg font-semibold dark:text-white">
              {data.list.map((data: any, index: any) => (
                <li key={index}>
                  <p>
                    <span className="text-red-600">{data.qty}</span> {data.label.lang[code]}
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
                  <Link href={"/"} className="red-line-button">
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
