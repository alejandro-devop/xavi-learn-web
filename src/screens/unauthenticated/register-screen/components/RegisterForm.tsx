import Form, {
  EmailField,
  Fieldset,
  SubmitButton,
  PasswordField,
  TextField,
} from "core/components/form";
import { Button } from "core/components/buttons";
import { useForm, useRouting } from "core/hooks";
import { RegisterFormType } from "types/forms/auth.types";
import { useCallback } from "react";
import formConfig from "./form.config";

interface RegisterFormProps {
  loading?: boolean;
  errors?: string[] | null;
  onSubmit?: (f: RegisterFormType) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  errors,
  onSubmit,
  loading,
}) => {
  const { goBack } = useRouting();
  const [fields, form, { isValidForm }] = useForm<RegisterFormType>(formConfig);
  const handleSubmit = useCallback(() => onSubmit?.(form), [form, onSubmit]);

  return (
    <>
      {errors && (
        <ul>
          {errors.map((err, key) => (
            <li key={`err-${key}`}>{err}</li>
          ))}
        </ul>
      )}
      <Form onSubmit={handleSubmit}>
        <EmailField {...fields.email} />
        <TextField {...fields.name} />
        <PasswordField {...fields.password} />
        <PasswordField {...fields.confirmPassword} />
        <Fieldset>
          {loading ? (
            <span>Loading...</span>
          ) : (
            <SubmitButton disabled={!isValidForm}>Register</SubmitButton>
          )}
          <Button onClick={goBack}>Cancel</Button>
        </Fieldset>
      </Form>
    </>
  );
};

export default RegisterForm;
