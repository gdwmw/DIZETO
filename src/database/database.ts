const landingPage = [
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

const listPortfolio = [
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

const sortedListPortfolio = listPortfolio.sort((a, b) => {
  if (a.category < b.category) return -1;
  if (a.category > b.category) return 1;
  return 0;
});

export { landingPage, sortedListPortfolio };
