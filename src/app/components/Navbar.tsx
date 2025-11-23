import Link from "next/link";

export default function Navbar(){
  return (
    <nav style={{display: "flex", gap: 12}}>
      <Link href="/">Home</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/parish">Parishes</Link>
    </nav>
  );
}