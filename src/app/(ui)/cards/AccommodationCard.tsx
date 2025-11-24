import Image from "next/image";

interface AccommodationCardProps {
  name: string;
  image: string;
  rating?: number;
  price?: string;
}

export default function AccommodationCard({
  name,
  image,
  rating,
  price
}: AccommodationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative h-44 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>

        {rating && (
          <p className="text-yellow-600 font-medium">⭐ {rating.toFixed(1)}</p>
        )}

        {price && <p className="font-bold text-green-700">From {price}</p>}
      </div>
    </div>
  );
}
