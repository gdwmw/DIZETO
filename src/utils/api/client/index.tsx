const API_URL = process.env.NEXT_PUBLIC_CLIENT;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface IClient {
  alt: string;
  href: string;
  id: string;
  theme: string;
  urlLogo: string;
}

export const GETClient = async (): Promise<IClient[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: Client with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTClient = async (data: IClient): Promise<IClient> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Client with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
