import React from "react";
import ButtonBase from "../button-base/ButtonBase";
import styles from "./button.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  variant?: "primary" | "secondary" | "default";
}

/**
 * A more generic button, can be used for simple button typing such as
 * primary and secondary buttons.
 * @param param0
 * @returns
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  rounded,
  ...props
}) => {
  return (
    <ButtonBase
      className={classNames(styles.button, styles.default, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.rounded]: rounded,
      })}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "default",
};

export default React.memo(Button);
