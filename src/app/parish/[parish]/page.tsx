import { notFound } from "next/navigation";

const parishData = {
  kingston: { name: "Kingston", description: "Capital city of Jamaica." },
  portland: { name: "Portland", description: "Known for beaches and nature." },
};

export default function ParishPage({ params }: { params: { parish: string } }) {
  const parish = parishData[params.parish];

  if (!parish) return notFound();

  return (
    <div>
      <h2>{parish.name}</h2>
      <p>{parish.description}</p>

      <p>More metadata will load here dynamically soon.</p>
    </div>
  );
}
