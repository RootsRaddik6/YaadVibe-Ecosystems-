export function FlightCard({
  from,
  to,
  airline
}: {
  from: string;
  to: string;
  airline: string;
}) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h3 className="font-bold">{airline}</h3>
      <p className="text-sm mt-1">{from} → {to}</p>
    </div>
  );
}
