import { promises as fs } from "fs";

export const GET = async () => {
  try {
    const data = await fs.readFile("./public/database/theme.json", "utf-8");
    return new Response(data);
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to get theme" }), { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  try {
    const theme = await request.json();
    const themeStringify = JSON.stringify([theme]);
    await fs.writeFile("./public/database/theme.json", themeStringify, "utf-8");
    return new Response(JSON.stringify({ message: "Theme changed successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to change theme" }), { status: 500 });
  }
};
