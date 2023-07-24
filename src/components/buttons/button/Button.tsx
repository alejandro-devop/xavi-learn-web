import React from "react";
import ButtonBase from "../button-base/ButtonBase";
import styles from "./button.module.scss";
import classNames from "classnames";
import { IconType } from "components/icon/Icon";
import Icon from "components/icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  variant?: "primary" | "secondary" | "default";
  icon?: IconType;
}

/**
 * A more generic button, can be used for simple button typing such as
 * primary and secondary buttons.
 * @param param0
 * @returns
 */
const Button: React.FC<ButtonProps> = ({
  icon,
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
      {icon && (
        <span
          className={classNames(styles.iconWrapper, {
            [styles.iconWrapperRounded]: rounded,
          })}
        >
          <Icon
            className={classNames(styles.icon, {
              [styles.iconRounded]: rounded,
            })}
          />
        </span>
      )}
      <span className={classNames(styles.buttonContent)}>{children}</span>
    </ButtonBase>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "default",
};

export default React.memo(Button);
