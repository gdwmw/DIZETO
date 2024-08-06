"use server";

import { IAuthPayload, IAuthResponse } from "@/src/types/api";

import { IBooking } from "../booking";

const API_URL = process.env.AUTH_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

// TODO: Response sementara
interface ITemporaryAuthResponse extends IAuthResponse {
  booking?: IBooking[];
  password: string;
}

export const GETAuth = async (): Promise<ITemporaryAuthResponse[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to get: Auth with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const GETAuthById = async (id: string): Promise<ITemporaryAuthResponse> => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to get: Auth ${id} with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const POSTAuth = async (data: IAuthPayload): Promise<IAuthResponse> => {
  try {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const { confirmPassword, ...withoutConfirmPassword } = data;
    const res = await fetch(API_URL, {
      // TODO: Payload sementara
      body: JSON.stringify({ ...withoutConfirmPassword, image: "", role: "user", token: "12345678" }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Failed to post: Auth with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
