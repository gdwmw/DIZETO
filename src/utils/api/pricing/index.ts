import { IPricing } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_PRICING_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETPricing = async (): Promise<IPricing[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to get: Pricing with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const GETPricingById = async (id: string): Promise<IPricing> => {
  try {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to get: Pricing ${id} with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTPricing = async (data: IPricing): Promise<IPricing> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Pricing with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
