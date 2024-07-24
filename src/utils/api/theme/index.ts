"use server";

const API_URL = process.env.LOCAL_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export const PUTTheme = async (data: string): Promise<string> => {
  try {
    const res = await fetch(`${API_URL}/api/theme`, {
      body: data,
      headers: {
        "Content-Type": "text/plain",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Theme with status ${res.status}`);
    }

    return await res.text();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
