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
    { className, error, label, value, max, hideMax, ...props }: InputBaseProps,
    ref: React.Ref<any>
  ) => {
    const inputRender = (
      <input
        ref={ref as any}
        className={classNames(styles.inputBase, className)}
        name={props?.name || props?.id}
        maxLength={max}
        {...props}
        onChange={props?.onChange || (() => null)}
        value={value || ""}
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
            {error && <span className={styles.formErrorMsg}>{error}</span>}
          </Label>
          {inputRender}
          {max && !hideMax && (
            <span className={styles.charCount}>
              {`${value || ""}`?.length}/{max}
            </span>
          )}
        </Fieldset>
      );
    }
    return inputRender;
  }
);

InputBase.defaultProps = {
  max: 120,
};

export default React.memo(InputBase);
