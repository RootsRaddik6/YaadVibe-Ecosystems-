import Link from "next/link";

const parishes = [
  "kingston",
  "st-andrew",
  "st-catherine",
  "clarendon",
  "manchester",
  "st-elizabeth",
  "westmoreland",
  "hanover",
  "st-james",
  "trelawny",
  "st-ann",
  "st-mary",
  "portland",
  "st-thomas",
];

export default function ParishIndexPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Jamaican Parishes</h1>

      <p className="mb-6 text-gray-700">
        Select a parish to view accommodations, flights, transport, and attractions.
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {parishes.map((slug) => (
          <li key={slug}>
            <Link
              href={`/parish/${slug}`}
              className="block p-4 border rounded-md hover:bg-gray-100 text-lg capitalize"
            >
              {slug.replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
