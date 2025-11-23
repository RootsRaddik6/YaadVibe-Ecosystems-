"use client";

import { useState } from "react";

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

export default function ParishSelector({ onSelect }: { onSelect: (p: string) => void }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="my-4">
      <label className="block mb-2 font-semibold">Select Parish</label>
      <select
        className="p-2 border rounded-md w-full"
        value={selected}
        onChange={handleChange}
      >
        <option value="">-- Choose Parish --</option>
        {parishes.map((p) => (
          <option key={p} value={p}>
            {p.replace("-", " ").toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
