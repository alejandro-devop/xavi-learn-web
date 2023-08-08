import { usePost } from "core/contexts/api-context/hooks";
import { LoginForm } from "./components";
import { LoginFormType } from "types/forms/auth.types";
import { useSession } from "core/hooks";

type LoginResponseType = {
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    is_account_verified: boolean;
    auth_otp: string | number;
    last_otp_sent: string;
    created_at: string;
    updated_at: string;
  };
  token: string;
  refresh: string;
};

const LoginScreen: ScreenType = () => {
  const [sendRequest, loading, { errors }] = usePost<
    LoginFormType,
    LoginResponseType
  >("auth.login", {});
  const { setAllKeys } = useSession();

  const handleSubmit = async (form: LoginFormType) => {
    try {
      const response = await sendRequest(form);
      const { status, data } = response;
      if (!status) {
        // The errors are being returned by the hook
        return false;
      } else if (status) {
        setAllKeys({
          logged: true,
          user: {
            email: data?.data?.email,
            name: data?.data.name,
          },
          token: data?.token,
          refreshToken: data?.refresh,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Login Screen</h1>
      <LoginForm loading={loading} errors={errors} onSubmit={handleSubmit} />
    </>
  );
};

export default LoginScreen;
