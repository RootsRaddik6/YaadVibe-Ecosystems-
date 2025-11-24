interface FlightCardProps {
  airline: string;
  depart: string;
  arrive: string;
  duration?: string;
  price: string;
  onClick?: () => void;
}

export default function FlightCard({
  airline,
  depart,
  arrive,
  duration,
  price,
  onClick,
}: FlightCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        border rounded-xl bg-white shadow-sm p-4 cursor-pointer
        transition-all duration-200 hover:shadow-md hover:-translate-y-1
      "
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{airline}</h3>
        <span className="text-blue-600 font-semibold">{price}</span>
      </div>

      <div className="flex items-center justify-between text-gray-700">
        <div className="text-center">
          <p className="font-semibold">{depart}</p>
          <p className="text-xs">Departure</p>
        </div>

        <div className="text-center">
          <p>✈️</p>
          {duration && <p className="text-xs text-gray-500">{duration}</p>}
        </div>

        <div className="text-center">
          <p className="font-semibold">{arrive}</p>
          <p className="text-xs">Arrival</p>
        </div>
      </div>
    </div>
  );
}
