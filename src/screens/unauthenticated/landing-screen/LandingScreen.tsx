import { useRouting } from "core/hooks";

const LandingScreen: ScreenType = ({ title }) => {
  const { goTo } = useRouting();
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => goTo("register")}>Go to register</button>
      <button onClick={() => goTo("login")}>Go to login</button>
    </div>
  );
};

export default LandingScreen;
