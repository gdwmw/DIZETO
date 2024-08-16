import { IContact } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETContact = async (): Promise<IContact[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to get: Contact with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTContact = async (data: IContact[]): Promise<IContact[]> => {
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
        throw new Error(`Failed to put: Contact id ${dt.id} with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
