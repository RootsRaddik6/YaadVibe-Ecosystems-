"use client";

import Link from "next/link";

const parishes = [
  "kingston",
  "portland",
  "st-andrew",
  "st-thomas",
  "st-mary",
  "st-ann",
  "trelawny",
  "st-james",
  "hanover",
  "westmoreland",
  "st-elizabeth",
  "manchester",
  "clarendon",
  "st-catherine",
];

export default function ParishList() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-3">Parishes</h2>

      <ul className="grid grid-cols-2 gap-3">
        {parishes.map((p) => (
          <li key={p}>
            <Link
              href={`/parish/${p}`}
              className="block bg-gray-100 hover:bg-gray-200 p-3 rounded"
            >
              {p.replace("-", " ").toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
