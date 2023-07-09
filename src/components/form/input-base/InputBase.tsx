import { InputBaseProps } from "./types";
import { Fieldset, Label } from "components/form";

/**
 * Facade for the html input element. It is used to create inputs.
 * any common functionality can be implemented here
 * @param param0
 * @returns
 */
const InputBase: React.FC<InputBaseProps> = ({ label, ...props }) => {
  const inputRender = <input name={props?.name || props?.id} {...props} />;
  if (label) {
    return (
      <Fieldset {...props?.fieldSetProps}>
        <Label {...props?.labelProps} htmlFor={props?.id}>
          {label}
        </Label>
        {inputRender}
      </Fieldset>
    );
  }
  return inputRender;
};

export default InputBase;
