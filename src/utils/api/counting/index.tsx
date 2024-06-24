const API_URL = process.env.NEXT_PUBLIC_COUNTING;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface ICounting {
  count: number;
  id: string;
  title: string;
}

export const GETCounting = async (): Promise<ICounting[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch: Counting with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTCounting = async (data: ICounting): Promise<ICounting> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Counting with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
