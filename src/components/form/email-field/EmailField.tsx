import React from "react";
import InputBase from "../input-base";
import { InputBaseProps } from "../input-base/types";

interface EmailProps extends InputBaseProps {}

const Email: React.FC<EmailProps> = ({ ...props }) => {
  return <InputBase {...props} type="email" />;
};

export default React.memo(Email);
