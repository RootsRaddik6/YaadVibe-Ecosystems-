import { NextResponse } from "next/server";

// Temporary mock data — replace with DB queries soon
const parishData: Record<string, any> = {
  kingston: {
    name: "Kingston",
    description: "Capital city of Jamaica with nightlife and Blue Mountain views.",
    accommodations: ["R Hotel Kingston", "AC Hotel Kingston", "Spanish Court"],
    flights: ["Norman Manley International Airport (KIN)"],
    transport: ["Knutsford Express", "Local taxis", "Private drivers"],
    attractions: ["Devon House", "Bob Marley Museum", "Emancipation Park"],
  },

  portland: {
    name: "Portland",
    description: "Eco-paradise with rivers, beaches and waterfalls.",
    accommodations: ["Geejam Hotel", "The Trident", "Frenchman's Cove Villas"],
    flights: ["Ken Jones Aerodrome"],
    transport: ["Route taxis", "Private charters"],
    attractions: ["Blue Lagoon", "Reach Falls", "Navy Island"],
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const parish = searchParams.get("parish");

  if (!parish) {
    return NextResponse.json(
      { error: "Missing parish query parameter" },
      { status: 400 }
    );
  }

  const key = parish.toLowerCase();
  const data = parishData[key];

  if (!data) {
    return NextResponse.json(
      { error: "Parish not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ parish: key, data });
}
