import { ITitle } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_TITLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETTitle = async (): Promise<ITitle[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to get: Title with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTTitle = async (data: ITitle): Promise<ITitle> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Title with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
