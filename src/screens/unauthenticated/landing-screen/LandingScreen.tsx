import { useRouting, useSession } from "hooks";

const LandingScreen: ScreenType = ({ title }) => {
  const { goTo } = useRouting();
  const { setKey, session, clear, setAllKeys } = useSession();
  const { counter = 0 } = session;
  const count = () => {
    setKey("counter", counter + 1);
  };
  const setAnotherKeys = () => {
    setAllKeys({
      counter: 1000,
      couter: 1000,
      some: true,
    });
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{counter}</p>
      <button onClick={count}>Count</button>
      <button onClick={() => goTo("/login")}>Go to login</button>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => setAnotherKeys()}>Another</button>
    </div>
  );
};

export default LandingScreen;
