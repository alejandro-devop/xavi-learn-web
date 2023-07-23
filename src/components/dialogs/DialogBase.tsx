import { Button } from "components/buttons";
import DialogRenderer from "./DialogRenderer";
import { DialogBaseProps } from "./types";
import React, { useCallback, useEffect, useState } from "react";

/**
 * The dialog is mounted using the open flag, if the flag
 * is false the dialog will be unmounted with the content inside it.
 *
 * @param param0
 * @returns
 */
const DialogBase: React.FC<DialogBaseProps> = ({
  children,
  title,
  labels,
  onClose,
  disableFooter,
  open,
}) => {
  /**
   * The flags are being stored in an object to avoid calling
   * multiple setState at the same time and generate multipe
   * render
   */
  const [flags, setFlags] = useState({
    closed: false,
    open: open,
  });
  const { accept = "Accept", cancel = "Cancel" } = labels || {};

  /**
   * The close uses a timeout function to delay the unmounting and
   * give some time to execute the css animation.
   */
  const handleClose = useCallback(() => {
    setFlags((prev) => ({ ...prev, closed: true }));
    setTimeout(() => {
      setFlags({
        closed: false,
        open: false,
      });
      onClose?.();
    }, 1000);
  }, [onClose, setFlags]);

  useEffect(() => {
    if (!flags.open && open === true && !flags.closed) {
      setFlags((prev) => ({ ...prev, open: true }));
    } else if (!flags.closed && !open && flags.open === true) {
      handleClose();
    }
  }, [flags, open, handleClose]);

  if (!flags.open) {
    return null;
  }

  return (
    <DialogRenderer>
      <div className={`dialog-overlay ${flags?.closed ? "dialog-closed" : ""}`}>
        <div className="dialog-frame">
          {title && (
            <div className="dialog-header">
              <h3>{title}</h3>
            </div>
          )}
          <div className="dialog-body">{children}</div>
          {!disableFooter && (
            <div className="dialog-footer">
              <Button disabled={flags?.closed} onClick={handleClose}>
                {cancel}
              </Button>
              <Button disabled={flags?.closed}>{accept}</Button>
            </div>
          )}
        </div>
      </div>
    </DialogRenderer>
  );
};

export default DialogBase;
