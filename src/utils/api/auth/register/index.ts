import { IAuthResponse, IRegisterPayload } from "@/src/types/api";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface IUser {
  email: string;
  id: number;
  username: string;
}

interface IRegisterSchema {
  jwt: string;
  user: IUser;
}

const mapDataToResponse = (data: IRegisterSchema): IAuthResponse => ({
  email: data.user.email,
  id: data.user.id,
  token: data.jwt,
  username: data.user.username,
});

export const POSTRegister = async (data: IRegisterPayload): Promise<IAuthResponse> => {
  try {
    const res = await fetch(`${API_URL}/api/auth/local/register?populate=*`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      const resError = await res.json();
      throw new Error(`Failed to post: Register with status ${res.status} || ${resError.error.message}`);
    }

    const resData: IRegisterSchema = await res.json();

    return mapDataToResponse(resData);
  } catch (error) {
    console.error("--- Fetch Error Message ---", error);
    throw error;
  }
};
