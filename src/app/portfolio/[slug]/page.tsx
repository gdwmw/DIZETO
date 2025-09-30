import axios from "axios";
import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import PortfolioLayout from "@/src/layouts/portfolio";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;

  const res = await axios.get(API_URL + `/api/portfolios/${slug}`);
  const title = res.data.data.title;

  return {
    description: "Let's see the photo results from DIZETO, hope you like it.",
    keywords: ["dizeto", "portfolio", "dizeto portfolio"],
    openGraph: {
      description: "Let's see the photo results from DIZETO, hope you like it.",
      images: [
        {
          alt: "DIZETO",
          height: 800,
          url: "https://dizeto.zettara.com/assets/images/logos/dizeto.png",
          width: 800,
        },
      ],
      locale: "en_US",
      siteName: "DIZETO",
      title: `DIZETO | ${title}`,
      type: "website",
      url: `https://dizeto.zettara.com/portfolio/${slug}`,
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
      images: ["https://dizeto.zettara.com/assets/images/logos/dizeto.png"],
      title: `DIZETO | ${title}`,
    },
  };
};

interface I {
  params: Promise<{ slug: string }>;
}

const PortfolioPage: FC<I> = async (props): Promise<ReactElement> => <PortfolioLayout slug={(await props.params).slug} />;

export default PortfolioPage;
