"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm px-3 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-50"
    >
      <FaArrowLeft />
      Back
    </button>
  );
}
