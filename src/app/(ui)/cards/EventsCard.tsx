interface EventsCardProps {
  title: string;
  parish: string;
  town?: string;
  date?: string;
  category?: string;
  price?: string;
  imageUrl?: string;
  onClick?: () => void;
}

export default function EventsCard({
  title,
  parish,
  town,
  date,
  category,
  price,
  imageUrl,
  onClick,
}: EventsCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        border rounded-xl bg-white shadow-sm p-4 cursor-pointer
        transition-all duration-200 hover:shadow-md hover:-translate-y-1
      "
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-3" />
      )}

      <h3 className="font-bold text-lg">{title}</h3>

      <p className="text-sm text-gray-700">
        {town ? `${town}, ` : ""}{parish}
      </p>

      {date && (
        <p className="text-sm text-blue-600 font-semibold mt-1">
          📅 {date}
        </p>
      )}

      {category && (
        <p className="text-sm text-gray-600 mt-1">
          Category: {category}
        </p>
      )}

      {price && (
        <p className="text-green-600 font-semibold mt-1">
          {price}
        </p>
      )}
    </div>
  );
}
