"use server";

import { cookies } from "next/headers";

export const PUT = async (request: Request) => {
  const theme = await request.text();

  cookies().set("theme", theme, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
  });

  return Response.json({ message: "Cookie theme updated" }, { status: 200 });
};
