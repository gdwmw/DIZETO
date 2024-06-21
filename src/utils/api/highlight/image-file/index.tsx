const API_URL = process.env.NEXT_PUBLIC_HIGHLIGHT + "/image-file";

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface IImageFile {
  highlightId: string;
  id: string;
  imgUrl: string;
  thumbnailUrl: string;
}

export const PUTImageFile = async (data: IImageFile): Promise<IImageFile> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Image File with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
