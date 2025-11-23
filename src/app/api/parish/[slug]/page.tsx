import React from "react";

async function getParishData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/parish/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ParishPage({
  params,
}: {
  params: { slug: string };
}) {
  const parish = await getParishData(params.slug);

  if (!parish) {
    return (
      <div className="p-6">
        <h2>Parish Not Found</h2>
        <p>This parish does not exist in our system.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">{parish.name}</h1>
      <p className="text-gray-700">{parish.description}</p>

      <section>
        <h2 className="text-xl font-semibold">Accommodations</h2>
        <ul className="list-disc ml-6">
          {parish.accommodations.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Flights</h2>
        <ul className="list-disc ml-6">
          {parish.flights.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Transport</h2>
        <ul className="list-disc ml-6">
          {parish.transport.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Attractions</h2>
        <ul className="list-disc ml-6">
          {parish.attractions.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
