import { Button } from "components/buttons";
import { useRouting } from "hooks";

const RegisteredMessage: React.FC<{ message?: string }> = ({ message }) => {
  const { redirectTo } = useRouting();
  return (
    <div>
      <h2>Register success!</h2>
      <p>{message}</p>
      <Button onClick={() => redirectTo("login")}>Go to login</Button>
    </div>
  );
};

export default RegisteredMessage;
