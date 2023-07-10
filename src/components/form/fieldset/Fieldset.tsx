import React from "react";
interface FieldsetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

/**
 * Facade for the html fieldset element. It is used to group related elements in a form.
 * @param param0
 * @returns
 */
const Fieldset: React.FC<FieldsetProps> = ({ children }) => {
  return <fieldset>{children}</fieldset>;
};

export default React.memo(Fieldset);
