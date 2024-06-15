const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/theme";

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface ITheme {
  theme: string;
}

export const GETTheme = async (): Promise<ITheme[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: Theme with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTTheme = async (data: ITheme): Promise<ITheme> => {
  try {
    const res = await fetch(API_URL, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Theme with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
