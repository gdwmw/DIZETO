import { FC, ReactElement } from "react";

import { Metadata } from "next";

import { dbPortfolioList, dbPortfolioPathTitle } from "@/database/database";
import { Portfolio as Port } from "@/modules/portfolio";

export const generateStaticParams = () => {
  return dbPortfolioList.map((data) => ({ slug: data.link }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => ({
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
    title: `DIZETO | ${dbPortfolioPathTitle(params.slug)}`,
    type: "website",
    url: `https://dizeto.vercel.app/portfoliolist/${params.slug}`,
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
  title: dbPortfolioPathTitle(params.slug),
  twitter: {
    card: "summary_large_image",
    creator: "@gdwmw",
    description: "Let's see the photo results from DIZETO, hope you like it.",
    images: ["https://dizeto.vercel.app/assets/images/logos/dizeto.png"],
    title: `DIZETO | ${dbPortfolioPathTitle(params.slug)}`,
  },
});

const Portfolio: FC<{ params: { slug: string } }> = ({ params }): ReactElement => {
  return <Port path={params.slug} />;
};

export default Portfolio;
