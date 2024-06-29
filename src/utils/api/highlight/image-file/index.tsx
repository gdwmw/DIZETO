import { IImageFile } from "../index";

const API_URL = process.env.NEXT_PUBLIC_HIGHLIGHT;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const PUTImageFile = async (data: IImageFile[]): Promise<IImageFile[]> => {
  try {
    const promises = data.map(async (file) => {
      const res = await fetch(`${API_URL}/imageFile/${file.id}`, {
        body: JSON.stringify(file),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      });

      if (!res.ok) {
        throw new Error(`Failed to put: Image File id ${file.id} with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
