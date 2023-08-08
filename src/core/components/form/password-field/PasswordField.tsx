import React from "react";
import { InputBaseProps } from "../input-base/types";
import TextField from "../text-field/TextField";

interface PasswordFieldProps extends InputBaseProps {}

const PasswordField: React.FC<PasswordFieldProps> = ({ ...props }) => {
  const [visible, setVisible] = React.useState(false);
  const toggleVisible = () => setVisible(!visible);
  return (
    <TextField
      {...props}
      type={visible ? "text" : "password"}
      icon="lock"
      onActionClick={toggleVisible}
      actionIcon={visible ? "eye-slash" : "eye"}
    />
  );
};

export default React.memo(PasswordField);
