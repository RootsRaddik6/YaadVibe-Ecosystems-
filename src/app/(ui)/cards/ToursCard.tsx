interface ToursCardProps {
  title: string;
  parish: string;
  town?: string;
  price: string;
  duration?: string;
  rating?: number;
  imageUrl?: string;
  onClick?: () => void;
}

export default function ToursCard({
  title,
  parish,
  town,
  price,
  duration,
  rating,
  imageUrl,
  onClick,
}: ToursCardProps) {
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

      <p className="text-blue-600 font-semibold mt-2">{price}</p>

      {duration && (
        <p className="text-gray-600 text-sm mt-1">Duration: {duration}</p>
      )}

      {rating && (
        <p className="text-yellow-500 text-sm mt-1">⭐ {rating.toFixed(1)}</p>
      )}
    </div>
  );
}
