import TipCard from "../cards/TipCard";
import { FaWallet } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { RiExchangeDollarFill } from "react-icons/ri";

export default function TippingSection() {
  return (
    <section className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Support Local – Tip Creators</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TipCard title="WalletConnect" icon={<FaWallet />} />
        <TipCard title="TON Connect" icon={<SiTether />} />
        <TipCard title="JamDex via Lynk" icon={<RiExchangeDollarFill />} />
      </div>
    </section>
  );
}
