import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>Welcome to YaadVibe</h2>
      <p>Use the nav below to explore the scaffold.</p>
      <ul>
        <li><Link href="/explore">Explore</Link></li>
        <li><Link href="/parish">Parishes</Link></li>
        <li><Link href="/api/booking">API (booking)</Link></li>
      </ul>
    </div>
  );
}