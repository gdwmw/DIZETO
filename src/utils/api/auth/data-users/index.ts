import { IDataUsers } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface IData {
  attributes: {
    firstName: string;
    image: { data?: { attributes?: { url?: string } } | null };
    lastName: string;
    role: string;
  };
  id: number;
}

interface IDataUsersSchema {
  data: IData[];
}

const mapDataToResponse = (data: IData): IDataUsers => ({
  firstName: data.attributes.firstName,
  id: data.id,
  image: API_URL + data.attributes.image?.data?.attributes?.url,
  lastName: data.attributes.lastName,
  role: data.attributes.role,
});

export const GETDataUsers = async (token: string): Promise<IDataUsers[]> => {
  try {
    const res = await fetch(`${API_URL}/api/data-users?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to get: Data Users with status ${res.status}`);
    }

    const resData: IDataUsersSchema = await res.json();

    return resData.data.map(mapDataToResponse);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const GETDataUsersById = async ({ id, token }: { id: number; token: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}/api/data-users/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to get: Data Users ${id} with status ${res.status}`);
    }

    const resData: { data: IData } = await res.json();

    return mapDataToResponse(resData.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const POSTDataUsers = async ({ data, token }: { data: IDataUsers; token: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}/api/data-users?populate=*`, {
      body: JSON.stringify({ data: data }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Failed to post: Data Users with status ${res.status}`);
    }

    const resData: { data: IData } = await res.json();

    return mapDataToResponse(resData.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const PUTDataUsers = async ({ data, token }: { data: IDataUsers; token: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}/api/data-users/${data.id}?populate=*`, {
      body: JSON.stringify({ data: data }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Data Users with status ${res.status}`);
    }

    const resData: { data: IData } = await res.json();

    return mapDataToResponse(resData.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};

export const DELETEDataUsers = async ({ id, token }: { id: number; token: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}/api/data-users/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete: Data Users with status ${res.status}`);
    }

    const resData: { data: IData } = await res.json();

    return mapDataToResponse(resData.data);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
