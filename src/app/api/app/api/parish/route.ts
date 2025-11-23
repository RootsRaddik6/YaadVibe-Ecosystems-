import { NextResponse } from "next/server";
import parishData from "@/utils/parishData";

export async function GET() {
  return NextResponse.json(parishData);
}