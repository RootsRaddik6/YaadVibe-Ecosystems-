import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const parishes = await prisma.parish.findMany({ include: { towns: true }});
  return NextResponse.json(parishes);
}
