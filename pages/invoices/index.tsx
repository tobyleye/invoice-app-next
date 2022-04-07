import { useState } from "react";
import InvoiceCard from "../../components/InvoiceCard";
import InvoiceFormDrawer from "../../components/InvoiceFormDrawer";
import PageLayout from "../../components/PageLayout";
import { FaPlus } from "react-icons/fa";
import EmptyState from "../../components/EmptyState";

export default function Invoices() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  let toggleInvoiceFormVisibility = () => {
    setShowInvoiceForm((show) => !show);
  };

  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <PageLayout>
      <div>
        <header className="flex items-center justify-between mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Invoices</h3>
            <p className="text-sm text-[#888EB0]">There are 7 total invoices</p>
          </div>
          <div className="flex items-center">
            <div className="mr-6">
              <select name="" id="">
                <option value="">Filter by status</option>
              </select>
            </div>
            <button
              onClick={toggleInvoiceFormVisibility}
              className="inline-flex bg-purple-base px-3 pr-4 py-3 rounded-full text-white"
            >
              <div className="inline-flex items-center">
                <span className="w-6 h-6 bg-white rounded-full grid place-items-center mr-3">
                  <FaPlus className="text-purple-base text-sm" />
                </span>
                <span>New Invoice</span>
              </div>
            </button>
          </div>
        </header>

        <div>
          {isEmpty ? (
            <EmptyState />
          ) : (
            <ul className="invoice-list grid  gap-4">
              <li>
                <InvoiceCard />
              </li>
              <li>
                <InvoiceCard />
              </li>
              <li>
                <InvoiceCard />
              </li>
              <li>
                <InvoiceCard />
              </li>
            </ul>
          )}
        </div>
      </div>

      <InvoiceFormDrawer
        open={showInvoiceForm}
        onDismiss={toggleInvoiceFormVisibility}
      />
    </PageLayout>
  );
}
