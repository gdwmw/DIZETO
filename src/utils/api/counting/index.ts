import { ICounting } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_COUNTING_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETCounting = async (): Promise<ICounting[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to get: Counting with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTCounting = async (data: ICounting[]): Promise<ICounting[]> => {
  try {
    const promises = data.map(async (dt) => {
      const res = await fetch(`${API_URL}/${dt.id}`, {
        body: JSON.stringify(dt),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      });

      if (!res.ok) {
        throw new Error(`Failed to put: Counting id ${dt.id} with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
