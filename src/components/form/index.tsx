import { FormEvent } from "react";
import EmailField from "./email-field";
import Fieldset from "./fieldset";
import InputBase from "./input-base";
import Label from "./label";
import PasswordField from "./password-field";
import SubmitButton from "./submit-button";
import TextField from "./text-field/TextField";

export {
  EmailField,
  Fieldset,
  InputBase,
  Label,
  PasswordField,
  SubmitButton,
  TextField,
};

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
