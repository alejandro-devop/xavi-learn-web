import { useRef } from "react";
import { createPortal } from "react-dom";

interface DialogRendererProps {
  children: React.ReactNode;
}

const DialogRenderer: React.FC<DialogRendererProps> = ({ children }) => {
  const parent = useRef(document.getElementById("root")).current;
  return parent ? createPortal(children, parent) : null;
};

export default DialogRenderer;
