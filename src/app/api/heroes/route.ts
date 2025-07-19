import { heroes } from "@/data/heroes";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(heroes);
}
