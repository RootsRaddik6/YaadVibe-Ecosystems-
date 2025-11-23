import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateBookingPayload } from "@/utils/validateBooking";

export async function POST(req: Request) {
  const body = await req.json();
  const { ok, error } = validateBookingPayload(body);
  if (!ok) return NextResponse.json({ error }, { status: 400 });

  // create booking — TODO: integrate payment confirmation
  const booking = await prisma.booking.create({
    data: {
      userId: body.userId,
      amount: body.amount || 0,
      status: "pending"
    }
  });

  return NextResponse.json({ booking }, { status: 201 });
}
