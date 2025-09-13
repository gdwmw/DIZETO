import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import PortfolioLayout from "@/src/layouts/portfolio";
import { IPortfolioResponse } from "@/src/types";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const generateStaticParams = async () => {
  const res: { data: IPortfolioResponse[] } = await fetch(API_URL + "/api/portfolios").then((res) => res.json());
  return res.data.map((dt) => ({
    slug: dt.documentId,
  }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;

  const title = await fetch(API_URL + `/api/portfolios/${slug}`)
    .then((res) => res.json())
    .then((res) => res.data.title);

  return {
    description: "Let's see the photo results from DIZETO, hope you like it.",
    keywords: ["dizeto", "portfolio", "dizeto portfolio"],
    openGraph: {
      description: "Let's see the photo results from DIZETO, hope you like it.",
      images: [
        {
          alt: "DIZETO",
          height: 800,
          url: "https://dizeto.vercel.app/assets/images/logos/dizeto.png",
          width: 800,
        },
      ],
      locale: "en_US",
      siteName: "DIZETO",
      title: `DIZETO | ${title}`,
      type: "website",
      url: `https://dizeto.vercel.app/portfolio/${slug}`,
    },
    robots: {
      follow: true,
      googleBot: {
        follow: true,
        index: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        noimageindex: false,
      },
      index: true,
      nocache: false,
    },
    title: title,
    twitter: {
      card: "summary_large_image",
      creator: "@gdwmw",
      description: "Let's see the photo results from DIZETO, hope you like it.",
      images: ["https://dizeto.vercel.app/assets/images/logos/dizeto.png"],
      title: `DIZETO | ${title}`,
    },
  };
};

interface I {
  params: Promise<{ slug: string }>;
}

const PortfolioPage: FC<I> = async (props): Promise<ReactElement> => <PortfolioLayout slug={(await props.params).slug} />;

export default PortfolioPage;
