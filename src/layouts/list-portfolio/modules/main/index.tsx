import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

import { getBase64 } from "@/src/hooks";
import { GETPortfolio } from "@/src/utils";

import { Content } from "./batches";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const Main: FC = async (): Promise<ReactElement> => {
  const res = await GETPortfolio("sort[0]=category:asc&populate=thumbnail");

  return (
    <main className="container mx-auto px-5 pt-10">
      <Content>
        {res.map(async (dt, i) => (
          <Link href={`/portfolio/${dt.documentId}`} key={i}>
            <div className="size-fit border-2 border-gray-300 bg-white p-3 hover:border-red-600 dark:border-gray-700 dark:bg-dark dark:hover:border-red-600">
              <Image
                alt="Thumbnail"
                blurDataURL={await getBase64(API_URL + dt.thumbnail.url)}
                height={500}
                placeholder="blur"
                quality={50}
                src={API_URL + dt.thumbnail.url}
                width={500}
              />
              <div className="mx-auto my-3 h-0.5 w-24 rounded-full bg-red-600" />
              <div>
                <h3 className="font-semibold text-red-600">{dt.title}</h3>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-300">({dt.category})</p>
              </div>
            </div>
          </Link>
        ))}
      </Content>
    </main>
  );
};
