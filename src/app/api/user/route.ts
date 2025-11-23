import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, name } = await req.json();
  if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });
  const user = await prisma.user.upsert({
    where: { email },
    update: { name },
    create: { email, name }
  });
  return NextResponse.json({ user });
}
