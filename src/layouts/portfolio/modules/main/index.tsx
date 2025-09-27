import Image from "next/image";
import { FC, ReactElement } from "react";

import { Thumbnail } from "@/src/components";
import { getBase64 } from "@/src/hooks";
import { GETPortfolioByDocumentId } from "@/src/utils";

import { Content } from "./batches";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface I {
  slug: string;
}

export const Main: FC<I> = async (props): Promise<ReactElement> => {
  const res = await GETPortfolioByDocumentId(`${props.slug}?populate=image`);

  return (
    <main className="container mx-auto px-5 pt-10">
      <Content data={[res]}>
        {res.image
          .slice()
          .sort((a, b) => {
            const numA = parseInt(/\d+/.exec(a.name)?.[0] ?? "0", 10);
            const numB = parseInt(/\d+/.exec(b.name)?.[0] ?? "0", 10);
            return numA - numB;
          })
          .map(async (dt, i) => (
            <Thumbnail className={i === 0 ? "mt-5" : ""} index={i} key={i}>
              <Image
                alt="Thumbnail"
                blurDataURL={await getBase64(API_URL + dt.formats.small.url)}
                height={225}
                placeholder="blur"
                src={API_URL + dt.formats.small.url}
                width={337}
              />
            </Thumbnail>
          ))}
      </Content>
    </main>
  );
};
