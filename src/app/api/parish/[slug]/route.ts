import { NextResponse } from "next/server";

// Use the same data structure as /api/parish/route.ts
const parishData: Record<string, any> = {
  kingston: {
    name: "Kingston",
    description: "Capital city of Jamaica with nightlife, commerce, and cultural landmarks.",
    accommodations: ["R Hotel Kingston", "AC Hotel Kingston", "Spanish Court Hotel"],
    flights: ["Norman Manley International Airport"],
    transport: ["Knutsford Express", "Local taxis", "JUTA Tours"],
    attractions: ["Devon House", "Bob Marley Museum", "Emancipation Park"]
  },

  portland: {
    name: "Portland",
    description: "Eco-paradise with rivers, beaches, lush mountains and eco resorts.",
    accommodations: ["Geejam Hotel", "The Trident", "Bay View Eco Resort"],
    flights: ["Ken Jones Aerodrome"],
    transport: ["Route taxis", "Private charters"],
    attractions: ["Blue Lagoon", "Reach Falls", "Frenchman's Cove"]
  },
};

// GET /api/parish/[slug]
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const parish = parishData[slug.toLowerCase()];

  if (!parish) {
    return NextResponse.json(
      { error: "Parish not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(parish);
}
