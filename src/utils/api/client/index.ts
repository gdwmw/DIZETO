"use server";

import { IClient } from "@/src/types/api";

const API_URL = process.env.CLIENT_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETClient = async (): Promise<IClient[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch: Client with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const POSTClient = async (data: IClient[]): Promise<IClient[]> => {
  try {
    const filteredData = data.filter((dt) => !dt.id);
    const promises = filteredData.map(async (dt) => {
      const res = await fetch(API_URL, {
        body: JSON.stringify(dt),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!res.ok) {
        throw new Error(`Failed to post: Client with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTClient = async (data: IClient[]): Promise<IClient[]> => {
  try {
    const filteredData = data.filter((dt) => dt.id);
    const promises = filteredData.map(async (dt) => {
      const res = await fetch(`${API_URL}/${dt.id}`, {
        body: JSON.stringify(dt),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      });

      if (!res.ok) {
        throw new Error(`Failed to put: Client id ${dt.id} with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DELETEClient = async (data: string[]): Promise<string[]> => {
  try {
    const promises = data.map(async (id) => {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Failed to delete: Client id ${id} with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
