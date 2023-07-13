import { usePost } from "contexts/api-context/hooks";
import { RegisterForm, RegisteredMessage } from "./components";
import { RegisterFormType } from "types/forms/auth.types";
import { useState } from "react";

const RegisterScreen: ScreenType = () => {
  const [registeredMessage, setRegisteredMessage] = useState<
    string | undefined
  >();
  const [sendRequest, loading, { errors }] = usePost<{
    email: string;
    name: string;
    password: string;
  }>("auth.register", {});
  /**
   * Function to handle the submition of the form
   * @param form
   */
  const handleSubmit = async (form: RegisterFormType) => {
    try {
      const { status, ...data } = await sendRequest(form);
      if (!status) {
        // The errors are being returned by the hook
        return false;
      } else if (status) {
        setRegisteredMessage(data?.message);
      }
      console.log(data);
    } catch {}
  };

  return (
    <>
      <h1>Register Screen</h1>
      {registeredMessage ? (
        <RegisteredMessage message={registeredMessage} />
      ) : (
        <RegisterForm
          loading={loading}
          errors={errors}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default RegisterScreen;
