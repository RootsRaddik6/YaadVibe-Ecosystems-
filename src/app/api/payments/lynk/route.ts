import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: implement Lynk integration
  return NextResponse.json({ ok: true, incoming: data });
}
