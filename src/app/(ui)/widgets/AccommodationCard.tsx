export function AccommodationCard({
  name,
  rating
}: {
  name: string;
  rating: number;
}) {
  return (
    <div className="p-4 rounded border bg-white shadow">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Rating: {rating} ★</p>
    </div>
  );
}
