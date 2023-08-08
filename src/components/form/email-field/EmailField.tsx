import React from "react";
import InputBase from "../input-base";
import { InputBaseProps } from "../input-base/types";
import TextField from "../text-field/TextField";

interface EmailProps extends InputBaseProps {}

const Email: React.FC<EmailProps> = ({ ...props }) => {
  return <TextField {...props} type="email" icon="envelope" />;
};

export default React.memo(Email);
