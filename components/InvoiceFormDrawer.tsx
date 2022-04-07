import Drawer from "./Drawer";

type InvoiceFormDrawer = {
  open: boolean;
  onDismiss: () => void;
};
export default function InvoiceFormDrawer({
  open,
  onDismiss,
}: InvoiceFormDrawer) {
  return (
    <Drawer open={open} onDismiss={onDismiss} title="New Invoice">
      <fieldset>
        <legend className="text-purple-500">Bill from</legend>
        <div>
          <div>
            <label htmlFor="">Street Address</label>
            <input type="text" className="w-full" />
          </div>
        </div>
      </fieldset>
    </Drawer>
  );
}
