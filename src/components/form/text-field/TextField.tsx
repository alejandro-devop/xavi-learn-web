import React from "react";
import InputBase from "../input-base/InputBase";
import { InputBaseProps } from "../input-base/types";

interface TextFieldProps extends InputBaseProps {}

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return <InputBase type="text" {...props} />;
};

export default React.memo(TextField);
