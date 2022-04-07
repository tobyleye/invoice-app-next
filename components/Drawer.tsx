import * as Dialog from "@radix-ui/react-dialog";
import * as React from "react";
import styles from "./Drawer.module.css";

export default function Drawer({
  open,
  onDismiss,
  title,
  children,
}: {
  open: boolean;
  onDismiss: () => void;
  title: string;
  children: React.ReactElement;
}) {
  return (
    <>
      <Dialog.Root open={open} onOpenChange={onDismiss}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.content}>
            <div className={styles.innerContent}>
              <Dialog.Title className="mb-8 text-2xl font-semibold">
                {title}
              </Dialog.Title>
              {children}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
