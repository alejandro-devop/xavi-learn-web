import React, { forwardRef } from "react";
import { InputBaseProps } from "./types";
import { Fieldset, Label } from "core/components/form";
import classNames from "classnames";
import styles from "./input-base.module.scss";
/**
 * Facade for the html input element. It is used to create inputs.
 * any common functionality can be implemented here
 * @param param0
 * @returns
 */
const InputBase = forwardRef(
  (
    { className, error, label, ...props }: InputBaseProps,
    ref: React.Ref<any>
  ) => {
    const inputRender = (
      <input
        ref={ref as any}
        className={classNames(styles.inputBase, className)}
        name={props?.name || props?.id}
        {...props}
        onChange={props?.onChange || (() => null)}
        value={props?.value || ""}
      />
    );

    if (label) {
      return (
        <Fieldset
          {...props?.fieldSetProps}
          className={classNames(styles.inputFieldSet)}
        >
          <Label
            {...props?.labelProps}
            htmlFor={props?.id}
            className={classNames(styles.inputLabel)}
          >
            {label}
          </Label>
          {inputRender}
          {error && <span className={styles.formErrorMsg}>{error}</span>}
        </Fieldset>
      );
    }
    return inputRender;
  }
);

export default React.memo(InputBase);
