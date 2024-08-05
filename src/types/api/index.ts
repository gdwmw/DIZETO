export interface IExample {
  id: string;
  title: string;
}

// ----------------------------

export interface IAuthPayload {
  confirmPassword?: string;
  email?: string;
  name?: string;
  password: string;
  username: string;
}

export interface IAuthResponse {
  email?: null | string;
  id: string;
  image?: null | string;
  name?: null | string;
  role?: null | string;
  token?: null | string;
  username?: null | string;
}

// ----------------------------

export interface ITitle {
  id: string;
  title: string;
  titleRed: string;
}

// ----------------------------

export interface IAbout {
  description: string;
  id: string;
  logoURL: string;
  note: string;
  subTitle: string;
}

// ----------------------------

export interface IImages {
  highlightId: string;
  id: string;
  imgURL: string;
  thumbnailURL: string;
}

export interface IHighlight {
  copyright: string;
  id: string;
  images: IImages[];
}

// ----------------------------

export interface IList {
  label: string;
  qty: number;
}

export interface IListItem {
  id: string;
  list: IList[];
  pricingId: string;
}

export interface IPricing {
  category: string;
  id: string;
  listItem: IListItem[];
  package: string;
  price: number;
}

// ----------------------------

export interface ITestimony {
  comment: string;
  event: string;
  id: string;
  imageURL: string;
  name: string;
}

// ----------------------------

export interface ICounting {
  count: number;
  id: string;
  title: string;
}

// ----------------------------

export interface IClient {
  alt: string;
  href: string;
  id: string;
  logoURL: string;
  theme: string;
}

// ----------------------------

export interface IContact {
  href: string;
  id: string;
  label: string;
}
