import { NextRequest, NextResponse } from "next/server";
import { FetchProducts } from "@/data/fetch";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 0;
  const data = await FetchProducts(page);

  return NextResponse.json(data);
}
