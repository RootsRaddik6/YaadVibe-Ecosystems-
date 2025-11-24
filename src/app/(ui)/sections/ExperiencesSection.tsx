import ExperienceCard from "../cards/ExperienceCard";

interface ExperiencesSectionProps {
  title: string;
  experiences: {
    title: string;
    description: string;
    image: string;
    price?: string;
  }[];
}

export default function ExperiencesSection({ title, experiences }: ExperiencesSectionProps) {
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {experiences.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
