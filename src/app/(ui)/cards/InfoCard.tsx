interface InfoCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function InfoCard({
  title,
  subtitle,
  icon,
  onClick
}: InfoCardProps) {
  return (
    <div
      onClick={onClick}
      className="p-4 bg-white rounded-xl shadow hover:shadow-md cursor-pointer transition flex items-center gap-4"
    >
      {icon && <div className="text-2xl">{icon}</div>}

      <div>
        <p className="font-semibold">{title}</p>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
}
