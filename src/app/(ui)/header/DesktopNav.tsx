import Link from "next/link";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex space-x-8 font-medium">
      <Link href="/parish" className="hover:text-green-400">Parishes</Link>
      <Link href="/flights" className="hover:text-green-400">Flights</Link>
      <Link href="/tours" className="hover:text-green-400">Tours</Link>
      <Link href="/wallet" className="hover:text-green-400">Wallet</Link>
    </nav>
  );
}
