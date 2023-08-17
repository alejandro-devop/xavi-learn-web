export interface DialogBaseProps {
  open?: boolean;
  children?: React.ReactNode;
  disableClose?: boolean;
  onClose?: () => void;
  onAccept?: () => void;
  acceptLabel?: string;
  cancelLabel?: string;
  disableAccept?: boolean;
  disableCancel?: boolean;
  disableFooter?: boolean;
  title?: string;
  size?: "xs" | "sm" | "md" | "lg" | "full";
  labels?: {
    accept?: string;
    cancel?: string;
  };
}
