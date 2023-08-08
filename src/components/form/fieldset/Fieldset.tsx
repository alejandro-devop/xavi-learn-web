import React from "react";
import styles from "./fieldset.module.scss";
import classNames from "classnames";
interface FieldsetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

/**
 * Facade for the html fieldset element. It is used to group related elements in a form.
 * @param param0
 * @returns
 */
const Fieldset: React.FC<FieldsetProps> = ({ children, ...otherProps }) => {
  return (
    <fieldset
      {...otherProps}
      className={classNames(styles.fieldSet, otherProps?.className)}
    >
      {children}
    </fieldset>
  );
};

export default React.memo(Fieldset);
