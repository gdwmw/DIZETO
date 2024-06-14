const API_URL = process.env.NEXT_PUBLIC_TITLE;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface ITitle {
  id: string;
  redTitle: string;
  title: string;
}

export const GETTitle = async (): Promise<ITitle[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: Title with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
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
    console.log(error);
    throw error;
  }
};
