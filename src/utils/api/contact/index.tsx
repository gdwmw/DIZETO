const API_URL = process.env.NEXT_PUBLIC_CONTACT;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface IContact {
  address: string;
  email: string;
  id: string;
  phone: string;
  urlAddress: string;
  urlEmail: string;
  urlPhone: string;
  urlWebsite: string;
  website: string;
}

export const GETContact = async (): Promise<IContact[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: Contact with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTContact = async (data: IContact): Promise<IContact> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Contact with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
