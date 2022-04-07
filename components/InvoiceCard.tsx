import InvoiceStatus from "./InvoiceStatus";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function randomStatus() {
  let status = ["pending", "paid", "draft"];
  let randomIndex = Math.floor(Math.random() * status.length);
  return status[randomIndex];
}

export default function InvoiceCard() {
  return (
    <Link href="/invoices/id" passHref>
      <div className="relative grid grid-cols-5 gap-6 text-base items-center center bg-white rounded-lg px-6 py-6 pr-12 shadow-sm cursor-pointer">
        <div className="font-semibold">
          <span className="text-[#7E88C3]">#</span>
          RT3080
        </div>
        <div className="text-[#888EB0]">Due 19 Aug 2021</div>
        <div className="text-[#858BB2]">Jensen Huang</div>
        <div className="text-xl font-semibold">£ 1,800.90</div>
        <div>
          <InvoiceStatus status={randomStatus()} />
        </div>

        <div className="absolute right-[15px] top-0 bottom-0 grid place-items-center  text-purple-base text-sm">
          <FaChevronRight />
        </div>
      </div>
    </Link>
  );
}
