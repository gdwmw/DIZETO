export interface IAbout {
  description: string;
  id: string;
  logoURL: string;
  note: string;
  subTitle: string;
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
  email: string;
  id: string;
  image?: null | string;
  name: string;
  role: string;
  token: string;
  username: string;
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
  label: string;
}

// ----------------------------

export interface ICounting {
  count: number;
  id: string;
  title: string;
}

// ----------------------------

export interface IExample {
  id: string;
  title: string;
}

// ----------------------------

export interface IImageFile {
  highlightId: string;
  id: string;
  imgURL: string;
  thumbnailURL: string;
}

export interface IHighlight {
  copyright: string;
  id: string;
  imageFile: IImageFile[];
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
  pack: string;
  price: string;
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

export interface ITitle {
  id: string;
  title: string;
  titleRed: string;
}
