import { useRouting } from "hooks";

const LoginScreen: ScreenType = () => {
  const { goBack } = useRouting();
  return (
    <div>
      <h1>Login Screen</h1>
      <button onClick={() => goBack()}>Go back</button>
    </div>
  );
};

export default LoginScreen;
