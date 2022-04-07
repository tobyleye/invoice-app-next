interface InvoiceStatusProps {
  status: "pending" | "paid" | "draft";
}

export default function InvoiceStatus({ status }: InvoiceStatusProps) {
  return (
    <div className={"status relative px-6 py-2 rounded-lg overflow-hidden " + status}>
      <div className="bg absolute left-0 top-0 right-0 bottom-0 opacity-[0.06]"></div>
      <div className="flex items-center justify-center capitalize">
        <span className="dot w-2 h-2 flex-shrink-0 rounded-full mr-2"></span>
        <span className="font-medium">{status}</span>
      </div>

      <style jsx>{` 
        .pending {
            --color: #FF8F00;
        }
        .paid {
            --color: #33D69F;
        }
        .draft {
            --color: #373B53;
        }

        .status {
            color: var(--color);
        }

        .bg {
            background: var(--color);
        }

        .dot {
            background: var(--color);
        }
      `}</style>
    </div>
  );
}
