import { notFound } from "next/navigation";

export default async function ParishDetailPage({ params }: any) {
  const { slug } = params;

  // Fetch API data
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/parish?name=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

      <p className="text-gray-700 mb-6">{data.description}</p>

      {/* Accommodation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Accommodations</h2>
        <ul className="list-disc list-inside">
          {data.accommodations?.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Flights */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Flights</h2>
        <ul className="list-disc list-inside">
          {data.flights?.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Transport */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Transport</h2>
        <ul className="list-disc list-inside">
          {data.transport?.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Attractions */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Attractions</h2>
        <ul className="list-disc list-inside">
          {data.attractions?.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
