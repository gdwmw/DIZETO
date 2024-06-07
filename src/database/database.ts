const dbLandingPagePortfolio: string[] = [
  "DZT_CC1.webp",
  "DZT_CC2.webp",
  "DZT_CC3.webp",
  "DZT_CC4.webp",
  "DZT_CC5.webp",
  "DZT_CC6.webp",
  "DZT_CC7.webp",
  "DZT_CC8.webp",
  "DZT_CC9.webp",
  "DZT_CC10.webp",
  "DZT_CC11.webp",
  "DZT_CC12.webp",
];

type TPricing = {
  id: string;
  list: {
    label: string;
    qty: number;
  }[];
  package: string;
  price: string;
  title: string[];
}[];

const dbPricing: TPricing = [
  {
    id: "1",
    list: [
      {
        label: "CONCEPT PHOTO",
        qty: 1,
      },
      {
        label: "LOCATION",
        qty: 1,
      },
      {
        label: "EDITED PHOTO",
        qty: 20,
      },
      {
        label: "PHOTOGRAPHER",
        qty: 1,
      },
      {
        label: "PHOTO EDITOR",
        qty: 1,
      },
      {
        label: "MINOR REVISION",
        qty: 1,
      },
    ],
    package: "A",
    price: "1.5",
    title: ["PHOTO", "PRE-WEDDING"],
  },
  {
    id: "2",
    list: [
      {
        label: "CONCEPT PHOTO",
        qty: 3,
      },
      {
        label: "LOCATION",
        qty: 3,
      },
      {
        label: "EDITED PHOTO",
        qty: 60,
      },
      {
        label: "PHOTOGRAPHER",
        qty: 1,
      },
      {
        label: "PHOTO EDITOR",
        qty: 1,
      },
      {
        label: "MINOR REVISION",
        qty: 1,
      },
    ],
    package: "D",
    price: "1.0",
    title: ["PHOTO", "PRE-WEDDING"],
  },
  {
    id: "3",
    list: [
      {
        label: "HOURS",
        qty: 6,
      },
      {
        label: "LOCATION",
        qty: 1,
      },
      {
        label: "EDITED PHOTO",
        qty: 300,
      },
      {
        label: "PHOTOGRAPHER",
        qty: 1,
      },
      {
        label: "PHOTO EDITOR",
        qty: 1,
      },
      {
        label: "CAMERA",
        qty: 1,
      },
      {
        label: "MINOR REVISION",
        qty: 1,
      },
    ],
    package: "B",
    price: "1.5",
    title: ["PHOTO", "DOCUMENTATION"],
  },
  {
    id: "4",
    list: [
      {
        label: "PRODUCT",
        qty: 5,
      },
      {
        label: "ANGLE PHOTO",
        qty: 4,
      },
      {
        label: "B&W BACKGROUND COLOR",
        qty: 2,
      },
      {
        label: "REQUEST BACKGROUND COLOR",
        qty: 3,
      },
      {
        label: "TOTAL PHOTO",
        qty: 100,
      },
      {
        label: "PHOTOGRAPHER",
        qty: 1,
      },
      {
        label: "PHOTO EDITOR",
        qty: 1,
      },
      {
        label: "MINOR REVISION",
        qty: 1,
      },
    ],
    package: "A",
    price: "0.6",
    title: ["PHOTO", "CATALOG PRODUCT"],
  },
];

type TTestimonialsClients = {
  comment: string;
  id: string;
  image: string;
  name: string;
  status: string;
}[];

const dbTestimonialsClients: TTestimonialsClients = [
  {
    comment: "You must give it a try because the photographs are good",
    id: "1",
    image: "rangga-dewamoela.webp",
    name: "Rangga Dewamoela",
    status: "- Ginza's Birthday -",
  },
  {
    comment: "Alhamdulillah, the pictures are great, i'm very appreciative",
    id: "2",
    image: "rifa-anggyana.webp",
    name: "Rifa Anggyana",
    status: "- Ikatan Remaja Masjid Jawa Barat -",
  },
  {
    comment: "The photographs are excellent, the service is inexpensive, and the workflow is quick",
    id: "3",
    image: "ratri-werdiningsih.webp",
    name: "Ratri Werdiningsih",
    status: "- Rumah Batik Wijaya -",
  },
  {
    comment: "The cheerful color scheme appeals to me",
    id: "4",
    image: "vitto-safiy.webp",
    name: "Vitto Safiy",
    status: "- Safiy Kitchen -",
  },
  {
    comment: "In any case, it's highly recommended",
    id: "5",
    image: "gibran-farras.jpg",
    name: "Gibran Farras",
    status: "- Lentera Coffee -",
  },
  {
    comment: "Despite the fact that the photo was taken at my house, the outcome is satisfactory",
    id: "6",
    image: "neneng-camidah.webp",
    name: "Neneng Chamidah",
    status: "- Eid Photo Shoot -",
  },
  {
    comment: "Thank you for the wonderful photographs",
    id: "7",
    image: "novi.webp",
    name: "Novi",
    status: "- Reunion Documentation -",
  },
];

type TPortfolioList = {
  category: string;
  id: number;
  image: string;
  link: string;
  title: string;
}[];

const dbPortfolioList: TPortfolioList = [
  {
    category: "(DOCUMENTATION)",
    id: 1,
    image: "ginzas-birthday/thumbnail.webp",
    link: "ginzasbirthday",
    title: "GINZA'S BIRTHDAY",
  },
  {
    category: "(PRE-WEDDING)",
    id: 2,
    image: "halim-prewedding/thumbnail.webp",
    link: "halimprewedding",
    title: "HALIM",
  },
  {
    category: "(DOCUMENTATION)",
    id: 3,
    image: "ichas-birthday/thumbnail.webp",
    link: "ichasbirthday",
    title: "ICHA'S BIRTHDAY",
  },
  {
    category: "(PRODUCT)",
    id: 4,
    image: "lentera-coffee/thumbnail.webp",
    link: "lenteracoffee",
    title: "LENTERA COFFEE",
  },
  {
    category: "(PRODUCT)",
    id: 5,
    image: "macaire/thumbnail.webp",
    link: "macaire",
    title: "MACAIRE",
  },
  {
    category: "(DOCUMENTATION)",
    id: 6,
    image: "mitas-birthday/thumbnail.webp",
    link: "mitasbirthday",
    title: "MITA'S BIRTHDAY",
  },
  {
    category: "(PHOTO SHOOT)",
    id: 7,
    image: "nazla-clothes/thumbnail.webp",
    link: "nazlaclothes",
    title: "NAZLA CLOTHES",
  },
  {
    category: "(DOCUMENTATION)",
    id: 8,
    image: "faizal-graduation/thumbnail.webp",
    link: "faizalgraduation",
    title: "FAIZAL GRADUATION",
  },
  {
    category: "(PRE-WEDDING)",
    id: 9,
    image: "reni-prewedding/thumbnail.webp",
    link: "reniprewedding",
    title: "RENI",
  },
  {
    category: "(PRE-WEDDING)",
    id: 10,
    image: "rosita-prewedding/thumbnail.webp",
    link: "rositaprewedding",
    title: "ROSITA",
  },
  {
    category: "(HUNTING)",
    id: 11,
    image: "sely-hunting/thumbnail.webp",
    link: "selyhunting",
    title: "SELY",
  },
  {
    category: "(PRODUCT)",
    id: 12,
    image: "tenang-coffee/thumbnail.webp",
    link: "tenangcoffee",
    title: "TENANG COFFEE",
  },
  {
    category: "(DOCUMENTATION)",
    id: 13,
    image: "irma-jabar/thumbnail.webp",
    link: "irmajabar",
    title: "IRMA JABAR",
  },
  {
    category: "(DOCUMENTATION)",
    id: 14,
    image: "muhibah-angklung/thumbnail.webp",
    link: "muhibahangklung",
    title: "MUHIBAH ANGKLUNG",
  },
  {
    category: "(MUSIC COVER)",
    id: 15,
    image: "aya-music-cover/thumbnail.webp",
    link: "ayamusiccover",
    title: "AYA",
  },
  {
    category: "(DOCUMENTATION)",
    id: 16,
    image: "hkbp-bandung/thumbnail.webp",
    link: "hkbpbandung",
    title: "HKBP BANDUNG",
  },
  {
    category: "(CONTENT)",
    id: 17,
    image: "safiy-kitchen/thumbnail.webp",
    link: "safiykitchen",
    title: "SAFIY KITCHEN",
  },
  {
    category: "(PRODUCT)",
    id: 18,
    image: "rumah-batik-wijaya/thumbnail.webp",
    link: "rumahbatikwijaya",
    title: "RUMAH BATIK WIJAYA",
  },
  {
    category: "(PHOTO SHOOT)",
    id: 19,
    image: "eid-photo/thumbnail.webp",
    link: "eidphoto",
    title: "EID PHOTO",
  },
];

const dbSortedPortfolioList: TPortfolioList = dbPortfolioList.sort((a, b) => {
  if (a.category < b.category) return -1;
  if (a.category > b.category) return 1;
  return 0;
});

function dbPortfolioPathTitle(path: string) {
  switch (path) {
    case "ginzasbirthday":
      return "GINZA'S BIRTHDAY";
    case "halimprewedding":
      return "HALIM PRE-WEDDING";
    case "ichasbirthday":
      return "ICHA'S BIRTHDAY";
    case "lenteracoffee":
      return "LENTERA COFFEE";
    case "macaire":
      return "MACAIRE";
    case "mitasbirthday":
      return "MITA'S BIRTHDAY";
    case "nazlaclothes":
      return "NAZLA CLOTHES";
    case "faizalgraduation":
      return "FAIZAL GRADUATION";
    case "reniprewedding":
      return "RENI PRE-WEDDING";
    case "rositaprewedding":
      return "ROSITA PRE-WEDDING";
    case "selyhunting":
      return "SELY";
    case "tenangcoffee":
      return "TENANG COFFEE";
    case "irmajabar":
      return "IRMA JABAR";
    case "muhibahangklung":
      return "MUHIBAH ANGKLUNG";
    case "ayamusiccover":
      return "AYA";
    case "hkbpbandung":
      return "HKBP BANDUNG";
    case "safiykitchen":
      return "SAFIY KITCHEN";
    case "rumahbatikwijaya":
      return "RUMAH BATIK WIJAYA";
    case "eidphoto":
      return "EID PHOTO";
    default:
      return "Undefined";
  }
}

function dbPortfolioPathIndex(path: string) {
  switch (path) {
    case "ginzasbirthday":
      return 1;
    case "halimprewedding":
      return 2;
    case "ichasbirthday":
      return 3;
    case "lenteracoffee":
      return 4;
    case "macaire":
      return 5;
    case "mitasbirthday":
      return 6;
    case "nazlaclothes":
      return 7;
    case "faizalgraduation":
      return 8;
    case "reniprewedding":
      return 9;
    case "rositaprewedding":
      return 10;
    case "selyhunting":
      return 11;
    case "tenangcoffee":
      return 12;
    case "irmajabar":
      return 13;
    case "muhibahangklung":
      return 14;
    case "ayamusiccover":
      return 15;
    case "hkbpbandung":
      return 16;
    case "safiykitchen":
      return 17;
    case "rumahbatikwijaya":
      return 18;
    case "eidphoto":
      return 19;
    default:
      return 0;
  }
}

type TPortfolio = {
  alt: string;
  cc: string;
  dt: string;
  fldr: string;
  id: number;
  tdat: number;
  tit1: string;
  tit2: string;
  tit3: string;
}[];

const dbPortfolio: TPortfolio = [
  {
    alt: "XXXXX",
    cc: "© XXXX DIZETO. All rights reserved.",
    dt: "XX XX, XXXX",
    fldr: "XXXXX",
    id: 0,
    tdat: 0,
    tit1: "XXXXX",
    tit2: "XXX",
    tit3: "XX",
  },
  {
    alt: "Ginza's Birthday",
    cc: "© 2021 DIZETO. All rights reserved.",
    dt: "11TH DECEMBER, 2021",
    fldr: "ginzas-birthday",
    id: 1,
    tdat: 82,
    tit1: "GINZA'S BIRTHDAY",
    tit2: "GINZA'S BIRTHD",
    tit3: "AY",
  },
  {
    alt: "Halim Pre-Wedding",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "19TH FEBRUARY, 2022",
    fldr: "halim-prewedding",
    id: 2,
    tdat: 20,
    tit1: "HALIM PRE-WEDDING",
    tit2: "HALIM PRE-WEDDI",
    tit3: "NG",
  },
  {
    alt: "Icha's Birthday",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "12TH JUNE, 2022",
    fldr: "ichas-birthday",
    id: 3,
    tdat: 202,
    tit1: "ICHA'S BIRTHDAY",
    tit2: "ICHA'S BIRTHD",
    tit3: "AY",
  },
  {
    alt: "Lentera Coffee",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "13TH JUNE, 2022",
    fldr: "lentera-coffee",
    id: 4,
    tdat: 16,
    tit1: "LENTERA COFFEE",
    tit2: "LENTERA COFF",
    tit3: "EE",
  },
  {
    alt: "Macaire",
    cc: "© 2020 DIZETO. All rights reserved.",
    dt: "26TH JULY, 2020",
    fldr: "macaire",
    id: 5,
    tdat: 20,
    tit1: "MACAIRE",
    tit2: "MACAI",
    tit3: "RE",
  },
  {
    alt: "Mita's Birthday",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "26TH FEBRUARY, 2022",
    fldr: "mitas-birthday",
    id: 6,
    tdat: 95,
    tit1: "MITA'S BIRTHDAY",
    tit2: "MITA'S BIRTHD",
    tit3: "AY",
  },
  {
    alt: "Nazla Clothes",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "24TH DECEMBER, 2022",
    fldr: "nazla-clothes",
    id: 7,
    tdat: 62,
    tit1: "NAZLA CLOTHES",
    tit2: "NAZLA CLOTH",
    tit3: "ES",
  },
  {
    alt: "Faizal Graduation",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "28TH MAY, 2022",
    fldr: "faizal-graduation",
    id: 8,
    tdat: 102,
    tit1: "FAIZAL GRADUATION",
    tit2: "FAIZAL GRADUATI",
    tit3: "ON",
  },
  {
    alt: "Reni Pre-Wedding",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "27TH MAY, 2022",
    fldr: "reni-prewedding",
    id: 9,
    tdat: 98,
    tit1: "RENI PRE-WEDDING",
    tit2: "RENI PRE-WEDDI",
    tit3: "NG",
  },
  {
    alt: "Rosita Pre-Wedding",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "29TH MARCH, 2022",
    fldr: "rosita-prewedding",
    id: 10,
    tdat: 150,
    tit1: "ROSITA PRE-WEDDING",
    tit2: "ROSITA PRE-WEDDI",
    tit3: "NG",
  },
  {
    alt: "Sely Hunting",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "24TH APRIL, 2022",
    fldr: "sely-hunting",
    id: 11,
    tdat: 69,
    tit1: "SELY HUNTING",
    tit2: "SELY HUNTI",
    tit3: "NG",
  },
  {
    alt: "Tenang Coffee",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "10TH APRIL, 2022",
    fldr: "tenang-coffee",
    id: 12,
    tdat: 30,
    tit1: "TENANG COFFEE",
    tit2: "TENANG COFF",
    tit3: "EE",
  },
  {
    alt: "IRMA JABAR",
    cc: "© 2021 DIZETO. All rights reserved.",
    dt: "18TH DECEMBER, 2021",
    fldr: "irma-jabar",
    id: 13,
    tdat: 221,
    tit1: "IRMA JABAR",
    tit2: "IRMA JAB",
    tit3: "AR",
  },
  {
    alt: "Muhibah Angklung",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "3RD JUNE, 2022",
    fldr: "muhibah-angklung",
    id: 14,
    tdat: 215,
    tit1: "MUHIBAH ANGKLUNG",
    tit2: "MUHIBAH ANGKLU",
    tit3: "NG",
  },
  {
    alt: "Aya Music Cover",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "22ND MAY, 2022",
    fldr: "aya-music-cover",
    id: 15,
    tdat: 0,
    tit1: "AYA MUSIC COVER",
    tit2: "AYA MUSIC COV",
    tit3: "ER",
  },
  {
    alt: "HKBP Bandung",
    cc: "© 2021 DIZETO. All rights reserved.",
    dt: "2ND MAY, 2021",
    fldr: "hkbp-bandung",
    id: 16,
    tdat: 110,
    tit1: "HKBP BANDUNG",
    tit2: "HKBP BANDU",
    tit3: "NG",
  },
  {
    alt: "Safiy Kitchen",
    cc: "© 2022 DIZETO. All rights reserved.",
    dt: "23RD JANUARY, 2022",
    fldr: "safiy-kitchen",
    id: 17,
    tdat: 34,
    tit1: "SAFIY KITCHEN",
    tit2: "SAFIY KITCH",
    tit3: "EN",
  },
  {
    alt: "Rumah Batik Wijaya",
    cc: "© 2023 DIZETO. All rights reserved.",
    dt: "04TH FEBRUARY, 2023",
    fldr: "rumah-batik-wijaya",
    id: 18,
    tdat: 54,
    tit1: "RUMAH BATIK WIJAYA",
    tit2: "RUMAH BATIK WIJA",
    tit3: "YA",
  },
  {
    alt: "Eid Photo",
    cc: "© 2023 DIZETO. All rights reserved.",
    dt: "06TH APRIL, 2023",
    fldr: "eid-photo",
    id: 19,
    tdat: 180,
    tit1: "EID PHOTO",
    tit2: "EID PHO",
    tit3: "TO",
  },
];

export {
  dbLandingPagePortfolio,
  dbPortfolio,
  dbPortfolioList,
  dbPortfolioPathIndex,
  dbPortfolioPathTitle,
  dbPricing,
  dbSortedPortfolioList,
  dbTestimonialsClients,
};
