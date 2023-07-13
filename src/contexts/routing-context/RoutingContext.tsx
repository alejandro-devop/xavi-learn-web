import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routeAliases } from "config/routing.config";

export const RoutingCTX = createContext({
  logged: false,
  setLogged: (logged: boolean) => {},
  goTo: (path: keyof typeof routeAliases) => {},
  redirectTo: (path: keyof typeof routeAliases) => {},
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

  const goTo = (path: keyof typeof routeAliases) => {
    const url = routeAliases[path];
    navigate(url);
  };

  const redirectTo = (path: keyof typeof routeAliases) => {
    const url = routeAliases[path];
    navigate(url, { replace: true });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <RoutingCTXProvider value={{ logged, setLogged, goTo, goBack, redirectTo }}>
      {children}
    </RoutingCTXProvider>
  );
};

export default RoutingContext;
