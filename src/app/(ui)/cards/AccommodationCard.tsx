import Image from "next/image";

interface AccommodationCardProps {
  name: string;
  image: string;
  price?: string;
  rating?: number;
  onClick?: () => void;
}

export default function AccommodationCard({
  name,
  image,
  price,
  rating,
  onClick,
}: AccommodationCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer overflow-hidden rounded-xl bg-white
        shadow-md border border-gray-200
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative w-full h-44">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mt-1 text-yellow-500">
            {"★".repeat(Math.floor(rating))}
            <span className="text-gray-600 text-sm ml-1">({rating})</span>
          </div>
        )}

        {/* Price */}
        {price && (
          <p className="mt-2 text-sm font-semibold text-green-600">
            {price} / night
          </p>
        )}
      </div>
    </div>
  );
}
