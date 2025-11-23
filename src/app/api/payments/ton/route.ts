import { NextResponse } from "next/server";
export async function POST(req: Request) {
  // TON testnet integration placeholder
  const body = await req.json();
  return NextResponse.json({ ok: true, message: "ton placeholder", body });
}
