
"use client";

import Link from "next/link";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white px-4 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold tracking-wide">
        YAADVIBE
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 font-medium">
        <Link href="/parish" className="hover:text-green-400">Parishes</Link>
        <Link href="/flights" className="hover:text-green-400">Flights</Link>
        <Link href="/tours" className="hover:text-green-400">Tours</Link>
        <Link href="/wallet" className="hover:text-green-400">Wallet</Link>
      </nav>

      {/* Wallet Button */}
      <button
        className="hidden md:block bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
      >
        Connect Wallet
      </button>

      {/* Mobile Toggle */}
      <button
        className="md:hidden"
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {open && <MobileNav close={() => setOpen(false)} />}
    </header>
  );
}
