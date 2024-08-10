import { IDataUsers } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_DATA_USERS_URL;

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
  image: data.attributes.image?.data?.attributes?.url ?? null,
  lastName: data.attributes.lastName,
  role: data.attributes.role,
});

export const GETDataUsers = async (jwt: string): Promise<IDataUsers[]> => {
  try {
    const res = await fetch(`${API_URL}?populate=*`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to get: Data Users with status ${res.status}`);
    }

    const resData: IDataUsersSchema = await res.json();

    return resData.data.map(mapDataToResponse);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const GETDataUsersById = async ({ id, jwt }: { id: number; jwt: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to get: Data Users ${id} with status ${res.status}`);
    }

    const resData: { data: IData } = await res.json();

    return mapDataToResponse(resData.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const POSTDataUsers = async ({ data, jwt }: { data: IDataUsers; jwt: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}?populate=*`, {
      body: JSON.stringify({ data: data }),
      headers: {
        Authorization: `Bearer ${jwt}`,
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
    console.log(error);
    throw error;
  }
};

export const PUTDataUsers = async ({ data, jwt }: { data: IDataUsers; jwt: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}/${data.id}?populate=*`, {
      body: JSON.stringify({ data: data }),
      headers: {
        Authorization: `Bearer ${jwt}`,
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
    console.log(error);
    throw error;
  }
};

export const DELETEDataUsers = async ({ id, jwt }: { id: number; jwt: string }): Promise<IDataUsers> => {
  try {
    const res = await fetch(`${API_URL}/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete: Data Users with status ${res.status}`);
    }

    const resData: { data: IData } = await res.json();

    return mapDataToResponse(resData.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
