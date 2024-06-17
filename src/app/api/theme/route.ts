"use server";

import { cookies } from "next/headers";

export const PUT = async (request: Request) => {
  const theme = await request.text();

  cookies().set({
    httpOnly: true,
    name: "theme",
    path: "/",
    value: theme,
  });

  return new Response("Cookie theme updated", { status: 200 });
};
