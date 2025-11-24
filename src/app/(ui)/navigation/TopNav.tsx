"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

interface TopNavProps {
  onMenuClick?: () => void;
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 border-b bg-white sticky top-0 z-50 shadow-sm">
      <Link href="/" className="text-2xl font-bold tracking-wide">
        YAAD<span className="text-green-600">VIBE</span>
      </Link>

      <button
        onClick={onMenuClick}
        className="text-xl p-2 rounded-md border md:hidden"
      >
        <FaBars />
      </button>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="/parish" className="hover:text-green-600">Parishes</Link>
        <Link href="/experiences" className="hover:text-green-600">Experiences</Link>
        <Link href="/accommodation" className="hover:text-green-600">Stay</Link>
        <Link href="/tipping" className="hover:text-green-600">Tip</Link>
      </div>
    </nav>
  );
}
