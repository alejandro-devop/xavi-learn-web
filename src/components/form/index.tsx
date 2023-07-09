import { FormEvent } from "react";
import Fieldset from "./fieldset";
import InputBase from "./input-base";
import Label from "./label";
import SubmitButton from "./submit-button";

export { Fieldset, InputBase, Label, SubmitButton };

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.defaultProps = {
  method: "POST",
};

export default Form;
