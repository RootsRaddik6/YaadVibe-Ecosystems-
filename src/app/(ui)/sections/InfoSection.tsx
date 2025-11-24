import InfoCard from "../cards/InfoCard";

interface InfoSectionProps {
  title: string;
  items: {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
  }[];
}

export default function InfoSection({ title, items }: InfoSectionProps) {
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <InfoCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
