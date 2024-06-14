const API_URL = process.env.NEXT_PUBLIC_PRICING;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface IList {
  label: string;
  qty: string;
}

export interface IListItem {
  id: string;
  list: IList[];
  pricingId: string;
}

export interface IPricing {
  id: string;
  listItem: IListItem[];
  package: string;
  price: string;
  title: string;
  titleFirstLine: string;
  titleSecondLine: string;
}

export const GETPricing = async (): Promise<IPricing[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: Pricing with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
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
    console.log(error);
    throw error;
  }
};
