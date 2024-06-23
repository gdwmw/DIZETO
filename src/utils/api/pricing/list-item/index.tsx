import { IListItem } from "../index";

const API_URL = process.env.NEXT_PUBLIC_PRICING;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const PUTListItem = async (data: IListItem): Promise<IListItem> => {
  try {
    const res = await fetch(`${API_URL}/${data.pricingId}/listItem/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: List Item with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
