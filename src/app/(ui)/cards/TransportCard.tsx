interface TransportCardProps {
  provider: string;
  type: string; // Taxi, Bus, Shuttle, Car Rental, etc.
  parish: string;
  town?: string;
  priceRange?: string;
  contact?: string;
  imageUrl?: string;
  onClick?: () => void;
}

export default function TransportCard({
  provider,
  type,
  parish,
  town,
  priceRange,
  contact,
  imageUrl,
  onClick,
}: TransportCardProps) {
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
          alt={provider}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-3" />
      )}

      <h3 className="font-bold text-lg">{provider}</h3>

      <p className="text-sm text-gray-700">
        {type} — {town ? `${town}, ` : ""}{parish}
      </p>

      {priceRange && (
        <p className="text-green-600 font-semibold mt-2">
          {priceRange}
        </p>
      )}

      {contact && (
        <p className="text-blue-600 text-sm mt-1">
          Contact: {contact}
        </p>
      )}
    </div>
  );
}
