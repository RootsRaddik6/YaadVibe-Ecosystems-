import Image from "next/image";

interface ParishCardProps {
  name: string;
  image: string;
  onClick?: () => void;
}

export default function ParishCard({ name, image, onClick }: ParishCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl shadow-md bg-white overflow-hidden transition transform hover:scale-[1.02]"
    >
      <div className="relative h-40 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
      </div>
    </div>
  );
}
