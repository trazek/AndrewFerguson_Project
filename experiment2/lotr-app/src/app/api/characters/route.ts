import { NextResponse } from "next/server";

import { getApiUrl, getAPiHeaders } from "@/lib/api.constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const data = await fetch(
    `${getApiUrl()}/character${!name ? "" : `?name=/${name}/i`}`,
    getAPiHeaders()
  );

  const characters = await data.json();

  return NextResponse.json(characters.docs);
}
