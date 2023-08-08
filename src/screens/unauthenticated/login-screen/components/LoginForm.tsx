import Form, {
  EmailField,
  Fieldset,
  PasswordField,
  SubmitButton,
} from "core/components/form";
import { useForm, useRouting } from "core/hooks";
import { LoginFormType } from "types/forms/auth.types";
import formConfig from "./form.config";
import { Button } from "core/components/buttons";
import { useCallback } from "react";

interface LoginFormProps {
  loading?: boolean;
  errors?: string[] | null;
  onSubmit?: (f: LoginFormType) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading, errors }) => {
  const { goBack } = useRouting();
  const [fields, form, { isValidForm }] = useForm<LoginFormType>(formConfig);

  const handleSubmit = useCallback(() => {
    onSubmit?.(form);
  }, [onSubmit, form]);

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
        <PasswordField {...fields.password} />
        <Fieldset>
          {loading ? (
            <span>Sending...</span>
          ) : (
            <SubmitButton disabled={!isValidForm}>Log in</SubmitButton>
          )}
          <Button onClick={() => goBack()}>Cancel</Button>
        </Fieldset>
      </Form>
    </>
  );
};

export default LoginForm;
