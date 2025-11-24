interface TipCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function TipCard({ title, icon, onClick }: TipCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-start gap-4 bg-white rounded-xl p-4 shadow-md hover:bg-gray-50 transition"
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-lg font-semibold">{title}</span>
    </button>
  );
}
