import Image from "next/image";
import emailCampaignImage from "../assets/Email_campaign_Flatline.png";

export default function EmptyState() {
  return (
    <div className="text-center">
      <div className="w-52 h-52 relative mx-auto">
        <Image src={emailCampaignImage} alt="nothing" layout="fill" objectFit="cover" />
      </div>
      <h3 className="font-semibold text-xl mb-4 mt-10">
        There is nothing here
      </h3>
      <p className=" max-w-xs mx-auto text-sm text-[#888EB0]">
        Create an invoice by clicking the{" "}
        <span className="font-semibold">New Invoice</span> button and get
        started
      </p>
    </div>
  );
}
