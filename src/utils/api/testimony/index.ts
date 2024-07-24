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
      throw new Error(`Failed to fetch: Testimony with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTTestimony = async (data: ITestimony[]): Promise<ITestimony[]> => {
  try {
    const promises = data.map(async (dt) => {
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
