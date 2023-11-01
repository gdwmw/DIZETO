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

type pricing = {
  id: string;
  price: string;
  package: string;
  title: string[];
  list: {
    qty: number;
    label: string;
  }[];
}[];

const dbPricing: pricing = [
  {
    id: "1",
    price: "1.5",
    package: "A",
    title: ["PHOTO", "PRE-WEDDING"],
    list: [
      {
        qty: 1,
        label: "CONCEPT PHOTO",
      },
      {
        qty: 1,
        label: "LOCATION",
      },
      {
        qty: 20,
        label: "EDITED PHOTO",
      },
      {
        qty: 1,
        label: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        label: "PHOTO EDITOR",
      },
      {
        qty: 1,
        label: "MINOR REVISION",
      },
    ],
  },
  {
    id: "2",
    price: "1.0",
    package: "D",
    title: ["PHOTO", "PRE-WEDDING"],
    list: [
      {
        qty: 3,
        label: "CONCEPT PHOTO",
      },
      {
        qty: 3,
        label: "LOCATION",
      },
      {
        qty: 60,
        label: "EDITED PHOTO",
      },
      {
        qty: 1,
        label: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        label: "PHOTO EDITOR",
      },
      {
        qty: 1,
        label: "MINOR REVISION",
      },
    ],
  },
  {
    id: "3",
    price: "1.5",
    package: "B",
    title: ["PHOTO", "DOCUMENTATION"],
    list: [
      {
        qty: 6,
        label: "HOURS",
      },
      {
        qty: 1,
        label: "LOCATION",
      },
      {
        qty: 300,
        label: "EDITED PHOTO",
      },
      {
        qty: 1,
        label: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        label: "PHOTO EDITOR",
      },
      {
        qty: 1,
        label: "CAMERA",
      },
      {
        qty: 1,
        label: "MINOR REVISION",
      },
    ],
  },
  {
    id: "4",
    price: "0.6",
    package: "A",
    title: ["PHOTO", "CATALOG PRODUCT"],
    list: [
      {
        qty: 5,
        label: "PRODUCT",
      },
      {
        qty: 4,
        label: "ANGLE PHOTO",
      },
      {
        qty: 2,
        label: "B&W BACKGROUND COLOR",
      },
      {
        qty: 3,
        label: "REQUEST BACKGROUND COLOR",
      },
      {
        qty: 100,
        label: "TOTAL PHOTO",
      },
      {
        qty: 1,
        label: "PHOTOGRAPHER",
      },
      {
        qty: 1,
        label: "PHOTO EDITOR",
      },
      {
        qty: 1,
        label: "MINOR REVISION",
      },
    ],
  },
];

type testimonyClients = {
  id: string;
  name: string;
  status: string;
  comment: string;
  image: string;
}[];

const dbTestimonyClients: testimonyClients = [
  {
    id: "1",
    name: "Rangga Dewamoela",
    status: "- Ginza's Birthday -",
    comment: "You must give it a try because the photographs are good",
    image: "rangga-dewamoela.webp",
  },
  {
    id: "2",
    name: "Rifa Anggyana",
    status: "- Ikatan Remaja Masjid Jawa Barat -",
    comment: "Alhamdulillah, the pictures are great, i'm very appreciative",
    image: "rifa-anggyana.webp",
  },
  {
    id: "3",
    name: "Ratri Werdiningsih",
    status: "- Rumah Batik Wijaya -",
    comment: "The photographs are excellent, the service is inexpensive, and the workflow is quick",
    image: "ratri-werdiningsih.webp",
  },
  {
    id: "4",
    name: "Vitto Safiy",
    status: "- Safiy Kitchen -",
    comment: "The cheerful color scheme appeals to me",
    image: "vitto-safiy.webp",
  },
  {
    id: "5",
    name: "Gibran Farras",
    status: "- Lentera Coffee -",
    comment: "In any case, it's highly recommended",
    image: "gibran-farras.jpg",
  },
  {
    id: "6",
    name: "Neneng Chamidah",
    status: "- Eid Photo Shoot -",
    comment: "Despite the fact that the photo was taken at my house, the outcome is satisfactory",
    image: "neneng-camidah.webp",
  },
  {
    id: "7",
    name: "Novi",
    status: "- Reunion Documentation -",
    comment: "Thank you for the wonderful photographs",
    image: "novi.webp",
  },
];

type listPortfolio = {
  id: number;
  image: string;
  title: string;
  category: string;
  link: string;
}[];

const dbListPortfolio: listPortfolio = [
  {
    id: 1,
    image: "ginzas-birthday/thumbnail.webp",
    title: "GINZA'S BIRTHDAY",
    category: "(DOCUMENTATION)",
    link: "ginzasbirthday",
  },
  {
    id: 2,
    image: "halim-prewedding/thumbnail.webp",
    title: "HALIM",
    category: "(PRE-WEDDING)",
    link: "halimprewedding",
  },
  {
    id: 3,
    image: "ichas-birthday/thumbnail.webp",
    title: "ICHA'S BIRTHDAY",
    category: "(DOCUMENTATION)",
    link: "ichasbirthday",
  },
  {
    id: 4,
    image: "lentera-coffee/thumbnail.webp",
    title: "LENTERA COFFEE",
    category: "(PRODUCT)",
    link: "lenteracoffee",
  },
  {
    id: 5,
    image: "macaire/thumbnail.webp",
    title: "MACAIRE",
    category: "(PRODUCT)",
    link: "macaire",
  },
  {
    id: 6,
    image: "mitas-birthday/thumbnail.webp",
    title: "MITA'S BIRTHDAY",
    category: "(DOCUMENTATION)",
    link: "mitasbirthday",
  },
  {
    id: 7,
    image: "nazla-clothes/thumbnail.webp",
    title: "NAZLA CLOTHES",
    category: "(PHOTO SHOOT)",
    link: "nazlaclothes",
  },
  {
    id: 8,
    image: "faizal-graduation/thumbnail.webp",
    title: "FAIZAL GRADUATION",
    category: "(DOCUMENTATION)",
    link: "faizalgraduation",
  },
  {
    id: 9,
    image: "reni-prewedding/thumbnail.webp",
    title: "RENI",
    category: "(PRE-WEDDING)",
    link: "reniprewedding",
  },
  {
    id: 10,
    image: "rosita-prewedding/thumbnail.webp",
    title: "ROSITA",
    category: "(PRE-WEDDING)",
    link: "rositaprewedding",
  },
  {
    id: 11,
    image: "sely-hunting/thumbnail.webp",
    title: "SELY",
    category: "(HUNTING)",
    link: "selyhunting",
  },
  {
    id: 12,
    image: "tenang-coffee/thumbnail.webp",
    title: "TENANG COFFEE",
    category: "(PRODUCT)",
    link: "tenangcoffee",
  },
  {
    id: 13,
    image: "irma-jabar/thumbnail.webp",
    title: "IRMA JABAR",
    category: "(DOCUMENTATION)",
    link: "irmajabar",
  },
  {
    id: 14,
    image: "muhibah-angklung/thumbnail.webp",
    title: "MUHIBAH ANGKLUNG",
    category: "(DOCUMENTATION)",
    link: "muhibahangklung",
  },
  {
    id: 15,
    image: "aya-music-cover/thumbnail.webp",
    title: "AYA",
    category: "(MUSIC COVER)",
    link: "ayamusiccover",
  },
  {
    id: 16,
    image: "hkbp-bandung/thumbnail.webp",
    title: "HKBP BANDUNG",
    category: "(DOCUMENTATION)",
    link: "hkbpbandung",
  },
  {
    id: 17,
    image: "safiy-kitchen/thumbnail.webp",
    title: "SAFIY KITCHEN",
    category: "(CONTENT)",
    link: "safiykitchen",
  },
  {
    id: 18,
    image: "rumah-batik-wijaya/thumbnail.webp",
    title: "RUMAH BATIK WIJAYA",
    category: "(PRODUCT)",
    link: "rumahbatikwijaya",
  },
  {
    id: 19,
    image: "eid-photo/thumbnail.webp",
    title: "EID PHOTO",
    category: "(PHOTO SHOOT)",
    link: "eidphoto",
  },
];

const dbSortedListPortfolio = dbListPortfolio.sort((a, b) => {
  if (a.category < b.category) return -1;
  if (a.category > b.category) return 1;
  return 0;
});

type landingPagePortfolio = {
  loading: number;
  ginzasbirthday: number;
  halimprewedding: number;
  ichasbirthday: number;
  lenteracoffee: number;
  macaire: number;
  mitasbirthday: number;
  nazlaclothes: number;
  faizalgraduation: number;
  reniprewedding: number;
  rositaprewedding: number;
  selyhunting: number;
  tenangcoffee: number;
  irmajabar: number;
  muhibahangklung: number;
  ayamusiccover: number;
  hkbpbandung: number;
  safiykitchen: number;
  rumahbatikwijaya: number;
  eidphoto: number;
};

const dbPortfolioPathIndex: landingPagePortfolio = {
  loading: 0,
  ginzasbirthday: 1,
  halimprewedding: 2,
  ichasbirthday: 3,
  lenteracoffee: 4,
  macaire: 5,
  mitasbirthday: 6,
  nazlaclothes: 7,
  faizalgraduation: 8,
  reniprewedding: 9,
  rositaprewedding: 10,
  selyhunting: 11,
  tenangcoffee: 12,
  irmajabar: 13,
  muhibahangklung: 14,
  ayamusiccover: 15,
  hkbpbandung: 16,
  safiykitchen: 17,
  rumahbatikwijaya: 18,
  eidphoto: 19,
};

type portfolio = {
  id: number;
  tdat: number;
  tit1: string;
  tit2: string;
  tit3: string;
  dt: string;
  fldr: string;
  alt: string;
  cc: string;
}[];

const dbPortfolio: portfolio = [
  {
    id: 0,
    tdat: 1,
    tit1: "DIZETO | PORTFOLIO",
    tit2: "DIZETO PORTFOL",
    tit3: "IO",
    dt: "XXX XXX, XXX",
    fldr: "loading",
    alt: "Dizeto Portfolio",
    cc: "© Copyright XXXX - DIZETO",
  },
  {
    id: 1,
    tdat: 82,
    tit1: "GINZA'S BIRTHDAY",
    tit2: "GINZA'S BIRTHD",
    tit3: "AY",
    dt: "11TH DECEMBER, 2021",
    fldr: "ginzas-birthday",
    alt: "Ginza's Birthday",
    cc: "© 2021 DIZETO. All rights reserved.",
  },
  {
    id: 2,
    tdat: 20,
    tit1: "HALIM PRE-WEDDING",
    tit2: "HALIM PRE-WEDDI",
    tit3: "NG",
    dt: "19TH FEBRUARY, 2022",
    fldr: "halim-prewedding",
    alt: "Halim Pre-Wedding",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 3,
    tdat: 202,
    tit1: "ICHA'S BIRTHDAY",
    tit2: "ICHA'S BIRTHD",
    tit3: "AY",
    dt: "12TH JUNE, 2022",
    fldr: "ichas-birthday",
    alt: "Icha's Birthday",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 4,
    tdat: 16,
    tit1: "LENTERA COFFEE",
    tit2: "LENTERA COFF",
    tit3: "EE",
    dt: "13TH JUNE, 2022",
    fldr: "lentera-coffee",
    alt: "Lentera Coffee",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 5,
    tdat: 20,
    tit1: "MACAIRE",
    tit2: "MACAI",
    tit3: "RE",
    dt: "26TH JULY, 2020",
    fldr: "macaire",
    alt: "Macaire",
    cc: "© 2020 DIZETO. All rights reserved.",
  },
  {
    id: 6,
    tdat: 95,
    tit1: "MITA'S BIRTHDAY",
    tit2: "MITA'S BIRTHD",
    tit3: "AY",
    dt: "26TH FEBRUARY, 2022",
    fldr: "mitas-birthday",
    alt: "Mita's Birthday",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 7,
    tdat: 62,
    tit1: "NAZLA CLOTHES",
    tit2: "NAZLA CLOTH",
    tit3: "ES",
    dt: "24TH DECEMBER, 2022",
    fldr: "nazla-clothes",
    alt: "Nazla Clothes",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 8,
    tdat: 102,
    tit1: "FAIZAL GRADUATION",
    tit2: "FAIZAL GRADUATI",
    tit3: "ON",
    dt: "28TH MAY, 2022",
    fldr: "faizal-graduation",
    alt: "Faizal Graduation",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 9,
    tdat: 98,
    tit1: "RENI PRE-WEDDING",
    tit2: "RENI PRE-WEDDI",
    tit3: "NG",
    dt: "27TH MAY, 2022",
    fldr: "reni-prewedding",
    alt: "Reni Pre-Wedding",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 10,
    tdat: 150,
    tit1: "ROSITA PRE-WEDDING",
    tit2: "ROSITA PRE-WEDDI",
    tit3: "NG",
    dt: "29TH MARCH, 2022",
    fldr: "rosita-prewedding",
    alt: "Rosita Pre-Wedding",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 11,
    tdat: 69,
    tit1: "SELY HUNTING",
    tit2: "SELY HUNTI",
    tit3: "NG",
    dt: "24TH APRIL, 2022",
    fldr: "sely-hunting",
    alt: "Sely Hunting",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 12,
    tdat: 30,
    tit1: "TENANG COFFEE",
    tit2: "TENANG COFF",
    tit3: "EE",
    dt: "10TH APRIL, 2022",
    fldr: "tenang-coffee",
    alt: "Tenang Coffee",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 13,
    tdat: 221,
    tit1: "IRMA JABAR",
    tit2: "IRMA JAB",
    tit3: "AR",
    dt: "18TH DECEMBER, 2021",
    fldr: "irma-jabar",
    alt: "IRMA JABAR",
    cc: "© 2021 DIZETO. All rights reserved.",
  },
  {
    id: 14,
    tdat: 215,
    tit1: "MUHIBAH ANGKLUNG",
    tit2: "MUHIBAH ANGKLU",
    tit3: "NG",
    dt: "3RD JUNE, 2022",
    fldr: "muhibah-angklung",
    alt: "Muhibah Angklung",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 15,
    tdat: 0,
    tit1: "AYA MUSIC COVER",
    tit2: "AYA MUSIC COV",
    tit3: "ER",
    dt: "22ND MAY, 2022",
    fldr: "aya-music-cover",
    alt: "Aya Music Cover",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 16,
    tdat: 110,
    tit1: "HKBP BANDUNG",
    tit2: "HKBP BANDU",
    tit3: "NG",
    dt: "2ND MAY, 2021",
    fldr: "hkbp-bandung",
    alt: "HKBP Bandung",
    cc: "© 2021 DIZETO. All rights reserved.",
  },
  {
    id: 17,
    tdat: 34,
    tit1: "SAFIY KITCHEN",
    tit2: "SAFIY KITCH",
    tit3: "EN",
    dt: "23RD JANUARY, 2022",
    fldr: "safiy-kitchen",
    alt: "Safiy Kitchen",
    cc: "© 2022 DIZETO. All rights reserved.",
  },
  {
    id: 18,
    tdat: 54,
    tit1: "RUMAH BATIK WIJAYA",
    tit2: "RUMAH BATIK WIJA",
    tit3: "YA",
    dt: "04TH FEBRUARY, 2023",
    fldr: "rumah-batik-wijaya",
    alt: "Rumah Batik Wijaya",
    cc: "© 2023 DIZETO. All rights reserved.",
  },
  {
    id: 19,
    tdat: 180,
    tit1: "EID PHOTO",
    tit2: "EID PHO",
    tit3: "TO",
    dt: "06TH APRIL, 2023",
    fldr: "eid-photo",
    alt: "Eid Photo",
    cc: "© 2023 DIZETO. All rights reserved.",
  },
];

export { dbLandingPagePortfolio, dbPricing, dbTestimonyClients, dbSortedListPortfolio, dbPortfolioPathIndex, dbPortfolio };
