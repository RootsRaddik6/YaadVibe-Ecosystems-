"use client";

export default function WalletModal({ open, onClose }: { open: boolean; onClose: () => void; }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-xl">

        <h2 className="text-xl font-semibold mb-4">Connect Wallet</h2>

        <button className="w-full bg-blue-600 text-white py-3 rounded mb-3">WalletConnect</button>
        <button className="w-full bg-green-600 text-white py-3 rounded mb-3">TON Connect</button>
        <button className="w-full bg-yellow-600 text-white py-3 rounded">JamDex</button>

        <button onClick={onClose} className="mt-4 w-full text-center text-sm text-gray-500">Close</button>
      </div>
    </div>
  );
}
