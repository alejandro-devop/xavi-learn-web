import React from "react";
import { InputBaseProps } from "../input-base/types";
import TextField from "../text-field/TextField";

interface EmailFieldProps extends InputBaseProps {}

const EmailField: React.FC<EmailFieldProps> = ({ ...props }) => {
  return <TextField {...props} type="email" icon="envelope" />;
};

EmailField.defaultProps = {
  max: 320,
};

export default React.memo(EmailField);
