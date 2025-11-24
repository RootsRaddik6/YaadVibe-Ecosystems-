interface AccommodationCardProps {
  name: string;
  parish: string;
  town?: string;
  pricePerNight: string;
  rating?: number;
  imageUrl?: string;
  onClick?: () => void;
}

export default function AccommodationCard({
  name,
  parish,
  town,
  pricePerNight,
  rating,
  imageUrl,
  onClick,
}: AccommodationCardProps) {
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
          alt={name}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-3" />
      )}

      <h3 className="font-bold text-lg mb-1">{name}</h3>

      <p className="text-gray-700 text-sm">
        {town ? `${town}, ` : ""}{parish}
      </p>

      <p className="text-green-600 font-semibold mt-2">
        {pricePerNight} / night
      </p>

      {rating && (
        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {rating.toFixed(1)}
        </p>
      )}
    </div>
  );
}
