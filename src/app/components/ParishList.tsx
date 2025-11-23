"use client";

import Link from "next/link";

const parishes = [
  { key: "kingston", name: "Kingston" },
  { key: "st-andrew", name: "St. Andrew" },
  { key: "st-thomas", name: "St. Thomas" },
  { key: "portland", name: "Portland" },
  { key: "st-mary", name: "St. Mary" },
  { key: "st-ann", name: "St. Ann" },
  { key: "trelawny", name: "Trelawny" },
  { key: "st-james", name: "St. James" },
  { key: "hanover", name: "Hanover" },
  { key: "westmoreland", name: "Westmoreland" },
  { key: "st-elizabeth", name: "St. Elizabeth" },
  { key: "manchester", name: "Manchester" },
  { key: "clarendon", name: "Clarendon" },
  { key: "st-catherine", name: "St. Catherine" },
];

export default function ParishList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {parishes.map((p) => (
        <Link
          key={p.key}
          href={`/parish/${p.key}`}
          className="border border-gray-300 rounded-xl p-4 text-center font-semibold
                     hover:bg-green-200 hover:border-green-500 transition-all"
        >
          {p.name}
        </Link>
      ))}
    </div>
  );
}
