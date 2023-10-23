declare namespace LandingPage {
  type LanguageItem = {
    titleRedTxt: string;
    title: string;
    descRedTxt: string;
    desc: string;
    note: string;
  };

  type PriceItem = {
    id: number;
    price: string;
    package: string;
    title: { lang: string[][] };
    list: { qty: number; label: { lang: string[] } }[];
  };

  type TestimonyItem = {
    id: number;
    name: string;
    status: string;
    comment: { lang: string[] };
    image: string;
  };

  type TestimonyStatistics = {
    happyClient: number;
    completedProjects: number;
    subscriber: number;
  };

  export type LandingPageData = {
    id: number;
    about: { lang: LanguageItem[] };
    presetLandingPagePortfolio: number;
    pricing: PriceItem[];
    testimony: TestimonyItem[];
    testimonyStatistics: TestimonyStatistics;
  };
}

export default LandingPage;
