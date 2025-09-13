import Image from "next/image";
import { FC, ReactElement } from "react";

import { Thumbnail } from "@/src/components";
import { getBase64 } from "@/src/hooks";
import { GETHighlight } from "@/src/utils";

import { About, Client, Contact, Hero, Highlight, Pricing, Testimony } from "./batches";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const Main: FC = async (): Promise<ReactElement> => {
  const res = await GETHighlight();

  return (
    <main className="container mx-auto px-5">
      <Hero />
      <div className="space-y-10">
        <About />
        <Highlight data={res}>
          {res[0].image
            .slice()
            .sort((a, b) => {
              const numA = parseInt(/\d+/.exec(a.name)?.[0] ?? "0", 10);
              const numB = parseInt(/\d+/.exec(b.name)?.[0] ?? "0", 10);
              return numA - numB;
            })
            .map(async (dt, i) => (
              <Thumbnail index={i} key={i}>
                <Image
                  alt="Thumbnail"
                  blurDataURL={await getBase64(API_URL + dt.formats.small.url)}
                  height={dt.height}
                  loading="lazy"
                  placeholder="blur"
                  src={API_URL + dt.formats.small.url}
                  width={dt.width}
                />
              </Thumbnail>
            ))}
        </Highlight>
        <Pricing />
        <Testimony />
        <Client />
        <Contact />
      </div>
    </main>
  );
};
