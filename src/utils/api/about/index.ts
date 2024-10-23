import { IAbout } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface IData {
  attributes: {
    description: string;
    image: { data: { attributes: { url: string }; id: number } };
    note: string;
    redColor: number;
    redColorDesc: number;
    redColorSub: number;
    subTitle: string;
    title: string;
  };
  id: number;
}

interface IDataUsersSchema {
  data: IData[];
}

const mapDataToResponse = (data: IData): IAbout => ({
  description: data.attributes.description,
  id: data.id,
  image: {
    id: data.id,
    url: API_URL + data.attributes.image.data.attributes.url,
  },
  note: data.attributes.note,
  redColor: data.attributes.redColor,
  redColorDesc: data.attributes.redColorDesc,
  redColorSub: data.attributes.redColorSub,
  subTitle: data.attributes.subTitle,
  title: data.attributes.title,
});

export const GETAbout = async (): Promise<IAbout> => {
  try {
    const res = await fetch(`${API_URL}/api/abouts?populate=*`);

    if (!res.ok) {
      throw new Error(`Failed to get: About with status ${res.status}`);
    }

    const resData: IDataUsersSchema = await res.json();

    return mapDataToResponse(resData.data[0]);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTAbout = async (data: IAbout): Promise<IAbout> => {
  try {
    const res = await fetch(`${API_URL}/api/abouts/1?populate=*`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: About with status ${res.status}`);
    }

    const resData: { data: IData } = await res.json();

    return mapDataToResponse(resData.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
