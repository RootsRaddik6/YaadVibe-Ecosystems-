import Link from "next/link";

export function ParishCard({ parish }: { parish: { name: string; description: string; slug: string } }) {
  return (
    <Link href={`/parish/${parish.slug}`}>
      <div className="bg-white shadow rounded-lg p-4 hover:shadow-xl transition cursor-pointer">
        <h3 className="text-lg font-bold">{parish.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{parish.description}</p>
      </div>
    </Link>
  );
}
