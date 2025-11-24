import Image from "next/image";

interface ParishCardProps {
  name: string;
  image: string;
  description?: string;
  onClick?: () => void;
}

export default function ParishCard({
  name,
  image,
  description,
  onClick,
}: ParishCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer overflow-hidden rounded-xl bg-white
        shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        border border-gray-200
      "
    >
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>

        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
}
