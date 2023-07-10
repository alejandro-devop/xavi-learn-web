import React from "react";
import InputBase from "../input-base/InputBase";
import { InputBaseProps } from "../input-base/types";

interface PasswordFieldProps extends InputBaseProps {}

const PasswordField: React.FC<PasswordFieldProps> = ({ ...props }) => {
  return <InputBase {...props} type="password" />;
};

export default React.memo(PasswordField);
