import Link from "next/link";

export default function ParishIndex() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Parishes</h2>

      <p>Select a parish to explore accommodations, transport, tours and more.</p>

      <ul style={{ lineHeight: "2rem", fontSize: "1.1rem" }}>
        <li>
          <Link href="/parish/kingston">Kingston</Link>
        </li>
        <li>
          <Link href="/parish/portland">Portland</Link>
        </li>
        <li>
          <Link href="/parish/st-andrew">St. Andrew</Link>
        </li>
        <li>
          <Link href="/parish/st-mary">St. Mary</Link>
        </li>
        <li>
          <Link href="/parish/st-thomas">St. Thomas</Link>
        </li>
        <li>
          <Link href="/parish/st-ann">St. Ann</Link>
        </li>
        <li>
          <Link href="/parish/st-james">St. James</Link>
        </li>
        <li>
          <Link href="/parish/trelawny">Trelawny</Link>
        </li>
        <li>
          <Link href="/parish/westmoreland">Westmoreland</Link>
        </li>
        <li>
          <Link href="/parish/hanover">Hanover</Link>
        </li>
        <li>
          <Link href="/parish/clarendon">Clarendon</Link>
        </li>
        <li>
          <Link href="/parish/manchester">Manchester</Link>
        </li>
        <li>
          <Link href="/parish/st-elizabeth">St. Elizabeth</Link>
        </li>
        <li>
          <Link href="/parish/st-catherine">St. Catherine</Link>
        </li>
      </ul>
    </div>
  );
}
