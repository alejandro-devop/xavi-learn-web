import React from "react";
import { InputBaseProps } from "./types";
import { Fieldset, Label } from "components/form";
import classNames from "classnames";
import styles from "./input-base.module.scss";
/**
 * Facade for the html input element. It is used to create inputs.
 * any common functionality can be implemented here
 * @param param0
 * @returns
 */
const InputBase: React.FC<InputBaseProps> = ({
  className,
  error,
  label,
  ...props
}) => {
  const inputRender = (
    <input
      className={classNames(styles.inputBase, className)}
      name={props?.name || props?.id}
      {...props}
      onChange={props?.onChange || (() => null)}
      value={props?.value || ""}
    />
  );

  if (label) {
    return (
      <Fieldset {...props?.fieldSetProps}>
        <Label {...props?.labelProps} htmlFor={props?.id}>
          {label}
        </Label>
        {inputRender}
        {error && <span className={styles.formErrorMsg}>{error}</span>}
      </Fieldset>
    );
  }
  return inputRender;
};

export default React.memo(InputBase);
