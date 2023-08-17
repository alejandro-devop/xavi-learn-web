import { Button } from "core/components/buttons";
import DialogRenderer from "./DialogRenderer";
import { DialogBaseProps } from "./types";
import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./dialog-base.module.scss";
import IconButton from "../buttons/icon-button";

/**
 * The dialog is mounted using the open flag, if the flag
 * is false the dialog will be unmounted with the content inside it.
 *
 * @param param0
 * @returns
 */
const DialogBase: React.FC<DialogBaseProps> = ({
  disableClose,
  children,
  title,
  labels,
  onClose,
  onAccept,
  disableFooter,
  open,
  size,
  disableAccept,
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
    onClose?.();
    // setFlags((prev) => ({ ...prev, closed: true }));
    // setTimeout(() => {
    //   setFlags({
    //     closed: false,
    //     open: false,
    //   });
    //   onClose?.();
    // }, 1000);
  }, [onClose]);

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
      <div
        className={`dialog-overlay ${flags?.closed ? styles.dialogClosed : ""}`}
      >
        <div
          className={classNames(styles.dialogFrame, {
            [styles.dialogFrameSmall]: size === "sm",
            [styles.dialogFrameMedium]: size === "md",
            [styles.dialogFrameLarge]: size === "lg",
            [styles.dialogFrameFull]: size === "full",
            [styles.dialogFrameXS]: size === "xs",
          })}
        >
          {title && (
            <div className={styles.dialogHeader}>
              <h3>{title}</h3>
              {!disableClose && (
                <IconButton icon="times" onClick={handleClose} />
              )}
            </div>
          )}
          <div className={styles.dialogBody}>{children}</div>
          {!disableFooter && (
            <div className={styles.dialogFooter}>
              <Button disabled={flags?.closed} onClick={handleClose}>
                {cancel}
              </Button>
              <Button
                disabled={flags?.closed || disableAccept}
                variant="primary"
                onClick={onAccept}
              >
                {accept}
              </Button>
            </div>
          )}
        </div>
      </div>
    </DialogRenderer>
  );
};

DialogBase.defaultProps = {
  size: "sm",
};

export default DialogBase;
