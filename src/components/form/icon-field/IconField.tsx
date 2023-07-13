import InputBase from "../input-base/InputBase";
import { InputBaseProps } from "../input-base/types";

interface IconFieldProps extends InputBaseProps {}

const IconField: React.FC<IconFieldProps> = ({ ...props }) => {
  // console.log("props: ", props);
  return <InputBase {...props} />;
};

export default IconField;
