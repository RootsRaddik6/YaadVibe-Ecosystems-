"use client";

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Search Jamaica</h2>
        <input
          type="text"
          className="w-full border p-3 rounded bg-gray-100"
          placeholder="Search flights, tours, hotels..."
        />
        <button onClick={onClose} className="mt-4 text-gray-600 text-sm">Close</button>
      </div>
    </div>
  );
}
