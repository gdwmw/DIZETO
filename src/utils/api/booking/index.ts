"use server;";

const API_URL = "https://66a21dd9967c89168f1ed971.mockapi.io/dizeto/auth/";

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

export interface IBooking {
  authId: string;
  date: string;
  id?: string;
  packageId: string;
  paymentMethod?: string;
  status: string;
  time: string;
  total: number;
}

export const GETBooking = async ({ authId }: { authId: string }): Promise<IBooking[]> => {
  try {
    const res = await fetch(`${API_URL}/${authId}/booking`);

    if (!res.ok) {
      throw new Error(`Failed to get: Booking with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const GETBookingById = async ({ authId, id }: { authId: string; id: string }): Promise<IBooking> => {
  try {
    const res = await fetch(`${API_URL}/${authId}/booking/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to get: Booking with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const POSTBooking = async (data: IBooking): Promise<IBooking> => {
  try {
    const res = await fetch(`${API_URL}/${data.authId}/booking`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error(`Failed to post: Booking with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PUTBooking = async (data: IBooking): Promise<IBooking> => {
  try {
    const res = await fetch(`${API_URL}/${data.authId}/booking/${data.id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (!res.ok) {
      throw new Error(`Failed to put: Booking with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DELETEBooking = async ({ authId, id }: { authId: string; id: string }): Promise<IBooking> => {
  try {
    const res = await fetch(`${API_URL}/${authId}/booking/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete: Booking with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
