import Image from "next/image";

interface ParishHeaderSectionProps {
  parish: string;
  image: string;
}

export default function ParishHeaderSection({ parish, image }: ParishHeaderSectionProps) {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
      <Image src={image} alt={parish} fill className="object-cover" />

      <div className="absolute inset-0 bg-black/40 flex items-end p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{parish}</h1>
      </div>
    </div>
  );
}
