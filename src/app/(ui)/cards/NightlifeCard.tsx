interface NightlifeCardProps {
  title: string;
  parish: string;
  town?: string;
  venueType?: string; // bar, club, lounge, etc.
  hours?: string;
  priceRange?: string;
  imageUrl?: string;
  onClick?: () => void;
}

export default function NightlifeCard({
  title,
  parish,
  town,
  venueType,
  hours,
  priceRange,
  imageUrl,
  onClick,
}: NightlifeCardProps) {
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

      {venueType && (
        <p className="text-sm text-purple-600 font-semibold mt-1">
          🍸 {venueType}
        </p>
      )}

      {hours && (
        <p className="text-sm text-gray-600 mt-1">
          Hours: {hours}
        </p>
      )}

      {priceRange && (
        <p className="text-green-600 font-semibold mt-1">
          {priceRange}
        </p>
      )}
    </div>
  );
}
