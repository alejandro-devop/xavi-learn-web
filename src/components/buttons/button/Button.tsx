import React from "react";
import ButtonBase from "../button-base/ButtonBase";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * A more generic button, can be used for simple button typing such as
 * primary and secondary buttons.
 * @param param0
 * @returns
 */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
};

Button.defaultProps = {
  type: "button",
};

export default React.memo(Button);
