import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routeAliases } from "config/routing.config";

export const RoutingCTX = createContext({
  logged: false,
  setLogged: (logged: boolean) => {},
  goTo: (path: RoutePath, config?: RoutingConfigType) => {},
  redirectTo: (path: RoutePath, config?: RoutingConfigType) => {},
  goBack: () => {},
});
export const RoutingCTXProvider = RoutingCTX.Provider;
export const RoutingCTXConsumer = RoutingCTX.Consumer;

interface RoutingContextProps {
  children?: React.ReactNode;
}

type RoutingConfigType = {
  params?: { [key: string]: string };
  state?: { [key: string]: any };
};

const RoutingContext: React.FC<RoutingContextProps> = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const getUrl = (path: RoutePath, config?: RoutingConfigType) => {
    let url = routeAliases[path];
    const { params } = config || {};
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        url = url.replace(`:${key}`, value);
      });
    }
    return url;
  };

  const goTo = (path: RoutePath, config?: RoutingConfigType) => {
    const url = getUrl(path, config);
    navigate(url);
  };

  const redirectTo = (path: RoutePath, config?: RoutingConfigType) => {
    console.log("Data: ", config);
    const url = getUrl(path, config);
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
