const API_URL = process.env.NEXT_PUBLIC_HIGHLIGHT;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface IImageFile {
  file: string;
  highlightId: string;
  id: string;
}

export interface IHighlight {
  id: string;
  imageFile: IImageFile[];
  urlAssets: string;
}

export const GETHighlight = async (): Promise<IHighlight[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-cache" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: Highlight with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTHighlight = async (data: IHighlight): Promise<IHighlight> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Highlight with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
