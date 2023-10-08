import Link from "next/link";

export default function PriceCard() {
  return (
    <>
      <div className="mt-20 h-fit w-full rounded-md border-4 dark:border-gray-700">
        <div className="relative flex h-40 w-full flex-col items-center justify-end bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
          {/* --------------------------- */}
          <div className="absolute -top-20 z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 bg-red-600 text-white dark:border-gray-700">
            <h2 className="text-3xl font-bold">IDR 1.5</h2>
            <p className="text-xl font-semibold">PACKAGE A</p>
          </div>
          {/* --------------------------- */}
          <h3 className="mb-5 text-center text-2xl font-semibold">
            PHOTO
            <br />
            PRE-WEDDING
          </h3>
        </div>
        {/* --------------------------- */}
        <div className="flex h-fit items-start justify-center p-5">
          <ul className="space-y-5 text-center text-lg font-semibold text-black dark:text-white">
            <li>
              <p>
                <span className="text-red-600">1</span> CONCEPT PHOTO
              </p>
            </li>
            <li>
              <p>
                <span className="text-red-600">1</span> CONCEPT PHOTO
              </p>
            </li>
            <li>
              <p>
                <span className="text-red-600">1</span> CONCEPT PHOTO
              </p>
            </li>
            <li>
              <p>
                <span className="text-red-600">1</span> CONCEPT PHOTO
              </p>
            </li>
            <li>
              <p>
                <span className="text-red-600">1</span> CONCEPT PHOTO
              </p>
            </li>
            <li>
              <p>
                <span className="text-red-600">1</span> CONCEPT PHOTO
              </p>
            </li>
            <li>
              <p>
                <span className="text-red-600">1</span> CONCEPT PHOTO
              </p>
            </li>
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
    </>
  );
}
