"use client";
import Link from "next/link";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute left-0 top-0 h-full w-64 bg-white p-6 shadow-lg transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-6">Menu</h3>

        <nav className="flex flex-col gap-4 text-lg">
          <Link href="/parish" onClick={onClose}>Parishes</Link>
          <Link href="/experiences" onClick={onClose}>Experiences</Link>
          <Link href="/accommodation" onClick={onClose}>Stay</Link>
          <Link href="/tipping" onClick={onClose}>Tip</Link>
        </nav>
      </div>
    </div>
  );
}
