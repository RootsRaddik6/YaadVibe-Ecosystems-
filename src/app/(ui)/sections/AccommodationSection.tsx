import AccommodationCard from "../cards/AccommodationCard";

interface AccommodationSectionProps {
  accommodations: {
    name: string;
    image: string;
    price?: string;
    rating?: number;
  }[];
}

export default function AccommodationSection({ accommodations }: AccommodationSectionProps) {
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold">Accommodations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {accommodations.map((item, index) => (
          <AccommodationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
