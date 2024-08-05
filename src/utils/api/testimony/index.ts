"use server";

import { ITestimony } from "@/src/types/api";

const API_URL = process.env.TESTIMONY_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const GETTestimony = async (): Promise<ITestimony[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to get: Testimony with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const POSTTestimony = async (data: ITestimony[]): Promise<ITestimony[]> => {
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
        throw new Error(`Failed to post: Testimony with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTTestimony = async (data: ITestimony[]): Promise<ITestimony[]> => {
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
        throw new Error(`Failed to put: Testimony id ${dt.id} with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DELETETestimony = async (data: string[]): Promise<string[]> => {
  try {
    const promises = data.map(async (id) => {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Failed to delete: Testimony id ${id} with status ${res.status}`);
      }

      return await res.json();
    });

    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
