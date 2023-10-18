import listportfolio from "@/database/listportfolio.json";
let data = listportfolio;

export async function GET(request: Request) {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const newBody = { id: data.length + 1, ...body };
  data.push(newBody);
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const index = data.findIndex((item) => item.id === body.id);
  if (index > -1) {
    data[index] = body;
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response("Data not found");
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const index = data.filter((item) => item.id !== id);
  data = index;
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
