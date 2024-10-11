import { NextRequest } from "next/server";
import { client } from "../subscribe/route";
import { redirect } from "next/navigation";

export const GET = async (request: NextRequest) => {
  const unsubscribeToken = request.nextUrl.searchParams.get("key");

  try {
    await client.connect();
    const db = await client.db("iccs_next");
    const col = await db.collection("newsletter");

    await col.deleteOne({ unsubscribeToken });
  } catch (err) {
    console.error(err);
  }

  redirect("/newsletter/unsubscribed")
};
