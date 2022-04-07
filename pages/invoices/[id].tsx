import Link from "next/link";
import Button from "../../components/Button";
import InvoiceStatus from "../../components/InvoiceStatus";
import PageLayout from "../../components/PageLayout";

export default function InvoiceDetails() {
  return (
    <PageLayout>
      <div>
        <div className="mb-4">
          <Link href="/invoices">Go back</Link>
        </div>

        <section className="bg-white shadow-sm flex items-center justify-between  rounded-xl px-6 py-4 mb-8">
          <div className="flex items-center">
            <span className="mr-5">status:</span>
            <InvoiceStatus status="paid"/>
          </div>

          <div className="actions flex  flex-row gap-2">
            <Button color="default">Edit</Button>
            <Button color="danger">Delete</Button>
            <Button color="primary">Mark as Paid</Button>
          </div>
        </section>

        <section className="bg-white shadow-sm px-10 py-10 rounded-xl">
          <div className="flex justify-between  items-start mb-5">
            <div>
              <span>#XM9141</span>
              <span>Graphic Design</span>
            </div>
            <div>
              19 Union Terrace
              <br />
              London
              <br />
              E1 3EZ
              <br />
              United Kingdom
            </div>
          </div>

          <div className="mb-5 flex ">
            <div className="w-[20%] mr-10">
              <div>
                <span>Invoice Date</span>
                <span>21 Aug 2021</span>
              </div>

              <div>
                <span>Payment Due</span>
                <span>20 Sep 2021</span>
              </div>
            </div>

            <div className="w-[20%] mr-16">
              <span>Bill to</span>
              <div>
                <p>Alex Grim</p>
                <p>84 Church Way Bradford BD1 9PB United Kingdom</p>
              </div>
            </div>

            <div className="">
              <span>Sent to</span>
              <span>alexgrim@mail.com</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden">
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <td>Item Name</td>
                    <td>QTY</td>
                    <td>Price</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="font-bold">Banner Design</span>
                    </td>
                    <td>1</td>
                    <td>£ 156.00</td>
                    <td>£ 156.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-bold">Banner Design</span>
                    </td>
                    <td>1</td>
                    <td>£ 156.00</td>
                    <td>£ 156.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-800 text-white flex items-center justify-between">
              <span>Amount Due</span>
              <span>£ 556.00</span>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
  
      `}</style>
    </PageLayout>
  );
}
