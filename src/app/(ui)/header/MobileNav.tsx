"use client";

import Link from "next/link";

export function MobileNav({ close }: { close: () => void }) {
  return (
    <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col p-6 space-y-4 z-40 shadow-lg md:hidden">
      <Link href="/parish" onClick={close}>Parishes</Link>
      <Link href="/flights" onClick={close}>Flights</Link>
      <Link href="/tours" onClick={close}>Tours</Link>
      <Link href="/wallet" onClick={close}>Wallet</Link>

      <button className="bg-green-500 w-full py-3 rounded-md">Connect Wallet</button>
    </div>
  );
}
