interface FlightCardProps {
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: string;
  flightNumber?: string;
  duration?: string;
  onClick?: () => void;
}

export default function FlightCard({
  airline,
  from,
  to,
  departureTime,
  arrivalTime,
  price,
  flightNumber,
  duration,
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
      <h3 className="font-bold text-lg mb-2">{airline}</h3>

      {flightNumber && (
        <p className="text-gray-600 text-sm mb-2">Flight: {flightNumber}</p>
      )}

      <div className="flex justify-between mb-3">
        <div>
          <p className="text-gray-500 text-sm">From</p>
          <p className="font-semibold">{from}</p>
          <p className="text-sm text-gray-700">{departureTime}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">To</p>
          <p className="font-semibold">{to}</p>
          <p className="text-sm text-gray-700">{arrivalTime}</p>
        </div>
      </div>

      {duration && (
        <p className="text-gray-600 text-sm mb-2">Duration: {duration}</p>
      )}

      <p className="text-blue-600 font-semibold mt-2">{price}</p>
    </div>
  );
}
