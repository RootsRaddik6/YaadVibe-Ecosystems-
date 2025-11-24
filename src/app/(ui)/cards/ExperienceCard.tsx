import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
}

export default function ExperienceCard({
  title,
  description,
  image,
  price
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {price && (
          <p className="text-sm font-bold text-green-700">Starting at {price}</p>
        )}
      </div>
    </div>
  );
}
