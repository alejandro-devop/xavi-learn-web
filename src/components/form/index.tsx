import { FormEvent } from "react";
import CheckboxField from "./checkbox-field";
import EmailField from "./email-field";
import Fieldset from "./fieldset";
import IconField from "./icon-field";
import InputBase from "./input-base";
import Label from "./label";
import PasswordField from "./password-field";
import SubmitButton from "./submit-button";
import TextAreaField from "./text-area";
import TextField from "./text-field";

export {
  CheckboxField,
  EmailField,
  Fieldset,
  IconField,
  InputBase,
  Label,
  PasswordField,
  SubmitButton,
  TextAreaField,
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
