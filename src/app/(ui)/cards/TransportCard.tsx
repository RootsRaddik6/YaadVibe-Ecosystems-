interface TransportCardProps {
  type: string;              // Taxi, Shuttle, Bus, Private Driver, etc.
  company: string;
  from: string;
  to: string;
  price: string;
  eta?: string;              // Estimated arrival time
  onClick?: () => void;
}

export default function TransportCard({
  type,
  company,
  from,
  to,
  price,
  eta,
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
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">{type}</h3>
        <span className="text-green-600 font-semibold">{price}</span>
      </div>

      <div className="text-gray-700 space-y-1">
        <p><span className="font-semibold">Company:</span> {company}</p>
        <p><span className="font-semibold">From:</span> {from}</p>
        <p><span className="font-semibold">To:</span> {to}</p>
        {eta && <p className="text-sm text-gray-500">ETA: {eta}</p>}
      </div>
    </div>
  );
}
