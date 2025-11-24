"use client";

export default function BookingModal({
  open,
  onClose,
  title
}: {
  open: boolean;
  onClose: () => void;
  title: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <label className="block mb-2 text-sm">Name</label>
        <input className="w-full border p-2 rounded mb-4" />

        <label className="block mb-2 text-sm">Email</label>
        <input className="w-full border p-2 rounded mb-4" />

        <button className="w-full bg-green-600 text-white py-3 rounded">Submit Booking</button>

        <button onClick={onClose} className="mt-4 text-gray-600 text-sm">Close</button>
      </div>
    </div>
  );
}
