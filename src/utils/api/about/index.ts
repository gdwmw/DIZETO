import { IAbout } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_ABOUT_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETAbout = async (): Promise<IAbout> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to get: About with status ${res.status}`);
    }

    const data = await res.json();

    return data[0];
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTAbout = async (data: IAbout): Promise<IAbout> => {
  try {
    const res = await fetch(`${API_URL}/1`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: About with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
