import Link from "next/link";

export default function ParishIndex() {
  return (
    <div>
      <h3>Parishes</h3>
      <p>Static placeholder list — replace with dynamic fetch from /api/parish</p>
      <ul>
        <li><Link href="/parish/kingston">Kingston</Link></li>
        <li><Link href="/parish/portland">Portland</Link></li>
      </ul>
    </div>
  );
}