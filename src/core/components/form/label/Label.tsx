import React from "react";
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * Facade for the html label element. It is used to create labels for form elements.
 * any common functionality can be implemented here
 * @param param0
 * @returns
 */
const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <label {...props}>{children}</label>;
};

export default React.memo(Label);
