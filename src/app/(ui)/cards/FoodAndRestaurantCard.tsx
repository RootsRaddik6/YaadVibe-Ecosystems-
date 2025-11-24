interface FoodAndRestaurantCardProps {
  name: string;
  parish: string;
  town?: string;
  cuisine?: string;
  priceRange?: string;
  rating?: number;
  imageUrl?: string;
  onClick?: () => void;
}

export default function FoodAndRestaurantCard({
  name,
  parish,
  town,
  cuisine,
  priceRange,
  rating,
  imageUrl,
  onClick,
}: FoodAndRestaurantCardProps) {
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

      <h3 className="font-bold text-lg">{name}</h3>

      <p className="text-sm text-gray-700">
        {town ? `${town}, ` : ""}{parish}
      </p>

      {cuisine && (
        <p className="text-gray-600 text-sm mt-1">
          Cuisine: {cuisine}
        </p>
      )}

      {priceRange && (
        <p className="text-green-600 font-semibold mt-1">
          {priceRange}
        </p>
      )}

      {rating && (
        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {rating.toFixed(1)}
        </p>
      )}
    </div>
  );
}
