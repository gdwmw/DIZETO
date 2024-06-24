const API_URL = process.env.NEXT_PUBLIC_TESTIMONY;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface ITestimony {
  comment: string;
  event: string;
  id: string;
  imageUrl: string;
  name: string;
}

export const GETTestimony = async (): Promise<ITestimony[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch: Testimony with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTTestimony = async (data: ITestimony): Promise<ITestimony> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Testimony with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
