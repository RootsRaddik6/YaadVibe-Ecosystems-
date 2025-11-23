import { notFound } from "next/navigation";

// Temporary local metadata (replace later with API version)
const parishMetadata: Record<string, any> = {
  kingston: {
    name: "Kingston",
    description: "Capital city of Jamaica with nightlife, culture, Blue Mountains.",
    accommodations: ["R Hotel Kingston", "AC Hotel Kingston", "Spanish Court"],
    flights: ["Norman Manley International Airport (KIN)"],
    transport: ["Knutsford Express", "Local taxis", "Private drivers"],
    attractions: ["Devon House", "Bob Marley Museum", "Emancipation Park"],
  },

  portland: {
    name: "Portland",
    description: "Lush forests, beaches, rafting, eco-tourism.",
    accommodations: ["Geejam Hotel", "The Trident", "Frenchman's Cove Villas"],
    flights: ["Local AirStrips - Ken Jones"],
    transport: ["Route taxis", "Private charters"],
    attractions: ["Blue Lagoon", "Reach Falls", "Navy Island"],
  },
};

export default function ParishDetails({ params }: { params: { parish: string } }) {
  const parishKey = params.parish.toLowerCase();
  const data = parishMetadata[parishKey];

  if (!data) return notFound();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>

      <h2>Accommodations</h2>
      <ul>
        {data.accommodations.map((x: string, i: number) => (
          <li key={i}>{x}</li>
        ))}
      </ul>

      <h2>Flights</h2>
      <ul>
        {data.flights.map((x: string, i: number) => (
          <li key={i}>{x}</li>
        ))}
      </ul>

      <h2>Transportation</h2>
      <ul>
        {data.transport.map((x: string, i: number) => (
          <li key={i}>{x}</li>
        ))}
      </ul>

      <h2>Attractions</h2>
      <ul>
        {data.attractions.map((x: string, i: number) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
