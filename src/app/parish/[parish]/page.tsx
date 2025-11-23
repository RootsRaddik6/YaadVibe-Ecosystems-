"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ParishPage() {
  const params = useParams();
  const parish = params.parish; // dynamic route segment
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!parish) return;

    async function load() {
      try {
        const res = await fetch(`/api/parish?name=${parish}`);
        const json = await res.json();
        setData(json.data || null);
      } catch (e) {
        console.error("Error loading parish data", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [parish]);

  if (loading) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Loading parish data…
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-10 text-red-600 text-center text-xl">
        No data available for this parish.
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold capitalize text-green-700">
        {data.name}
      </h1>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Overview
        </h2>
        <p className="text-gray-800">{data.description}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Major Towns
        </h2>
        <ul className="list-disc ml-6">
          {data.towns?.map((town: string) => (
            <li key={town}>{town}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Attractions
        </h2>
        <ul className="list-disc ml-6">
          {data.attractions?.map((spot: string) => (
            <li key={spot}>{spot}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Accommodation
        </h2>
        <ul className="list-disc ml-6">
          {data.accommodation?.map((place: string) => (
            <li key={place}>{place}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Transportation
        </h2>
        <ul className="list-disc ml-6">
          {data.transportation?.map((option: string) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
