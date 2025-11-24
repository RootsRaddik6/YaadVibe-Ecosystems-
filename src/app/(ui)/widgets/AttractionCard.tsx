export function AttractionCard({ item }: { item: string }) {
  return (
    <div className="bg-white border p-4 rounded shadow">
      <h4 className="font-semibold">{item}</h4>
    </div>
  );
}
