export interface DialogBaseProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  onAccept?: () => void;
  disableFooter?: boolean;
  title?: string;
  labels?: {
    accept?: string;
    cancel?: string;
  };
}
