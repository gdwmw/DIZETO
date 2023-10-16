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

const pricing = [
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

const testimony = [
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

export { landingPage, pricing, testimony, sortedListPortfolio };
