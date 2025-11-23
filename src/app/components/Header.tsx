"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
      {/* Left side: Back button */}
      <button
        onClick={() => router.back()}
        className="px-3 py-1 rounded border hover:bg-gray-100"
      >
        Back
      </button>

      {/* Center: App Name / Logo */}
      <Link href="/" className="text-2xl font-bold tracking-wide">
        YAADVIBE
      </Link>

      {/* Right side: WalletConnect placeholder */}
      <div className="px-3 py-1 border rounded bg-gray-50 text-gray-500">
        Wallet
      </div>
    </header>
  );
}
