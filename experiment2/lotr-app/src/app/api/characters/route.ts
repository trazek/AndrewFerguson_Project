import { NextResponse } from "next/server";

import { getApiUrl, getAPiHeaders } from "@/lib/api.constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const apiURL = `${getApiUrl()}/character${
    name === "" ? "" : `?name=/${name}/i`
  }`;

  const data = await fetch(apiURL, getAPiHeaders());

  const characters = await data.json();

  return NextResponse.json(characters.docs);
}
