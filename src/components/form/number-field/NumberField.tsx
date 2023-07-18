import React from "react";
import InputBase from "../input-base/InputBase";
import { InputBaseProps } from "../input-base/types";

interface NumberFieldProps extends InputBaseProps {}

const NumberField: React.FC<NumberFieldProps> = ({ ...props }) => {
  return <InputBase type="number" {...props} />;
};

export default React.memo(NumberField);
