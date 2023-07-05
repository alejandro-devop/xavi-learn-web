import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RoutingCTX = createContext({
  logged: false,
  setLogged: (logged: boolean) => {},
  goTo: (path: string) => {},
  goBack: () => {},
});
export const RoutingCTXProvider = RoutingCTX.Provider;
export const RoutingCTXConsumer = RoutingCTX.Consumer;

interface RoutingContextProps {
  children?: React.ReactNode;
}

const RoutingContext: React.FC<RoutingContextProps> = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <RoutingCTXProvider value={{ logged, setLogged, goTo, goBack }}>
      {children}
    </RoutingCTXProvider>
  );
};

export default RoutingContext;
