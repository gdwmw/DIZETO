import { ISelectImage } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface IDataUpload {
  id: string;
  name: string;
  url: string;
}

const mapDataToResponse = (data: IDataUpload): ISelectImage => ({
  id: data.id,
  name: data.name,
  url: API_URL + data.url,
});

export const GETSelectImage = async (): Promise<ISelectImage[]> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files?populate=*`);

    if (!res.ok) {
      throw new Error(`Failed to get: Select Image with status ${res.status}`);
    }

    const resData: IDataUpload[] = await res.json();

    return resData.map(mapDataToResponse);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const GETSelectImageById = async (id: number): Promise<ISelectImage> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files/${id}?populate=*`);

    if (!res.ok) {
      throw new Error(`Failed to get: Select Image ${id} with status ${res.status}`);
    }

    const resData: IDataUpload = await res.json();

    return mapDataToResponse(resData);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const POSTSelectImage = async (data: ISelectImage): Promise<ISelectImage> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files?populate=*`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Failed to post: Select Image with status ${res.status}`);
    }

    const resData: IDataUpload = await res.json();

    return mapDataToResponse(resData);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTSelectImage = async (data: ISelectImage): Promise<ISelectImage> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files/${data.id}?populate=*`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Select Image with status ${res.status}`);
    }

    const resData: IDataUpload = await res.json();

    return mapDataToResponse(resData);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const DELETESelectImage = async (id: string): Promise<ISelectImage> => {
  try {
    const res = await fetch(`${API_URL}/api/upload/files/${id}?populate=*`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete: Select Image with status ${res.status}`);
    }

    const resData: IDataUpload = await res.json();

    return mapDataToResponse(resData);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
