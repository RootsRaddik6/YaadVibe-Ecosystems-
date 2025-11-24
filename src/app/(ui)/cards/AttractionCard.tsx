import Image from "next/image";

interface AttractionCardProps {
  title: string;
  image: string;
  location?: string;
  priceRange?: string;
  onClick?: () => void;
}

export default function AttractionCard({
  title,
  image,
  location,
  priceRange,
  onClick,
}: AttractionCardProps) {
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
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>

        {location && (
          <p className="mt-1 text-sm text-gray-600">
            📍 {location}
          </p>
        )}

        {priceRange && (
          <p className="mt-2 text-sm font-semibold text-blue-600">
            {priceRange}
          </p>
        )}
      </div>
    </div>
  );
}
