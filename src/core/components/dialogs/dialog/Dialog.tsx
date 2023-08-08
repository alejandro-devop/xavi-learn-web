import DialogBase from "../DialogBase";
import { DialogBaseProps } from "../types";

interface DialogProps extends DialogBaseProps {}

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return <DialogBase {...props}>{children}</DialogBase>;
};

export default Dialog;
