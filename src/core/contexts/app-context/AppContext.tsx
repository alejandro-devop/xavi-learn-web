import { createContext } from "react";

type AppContextType = {
  apiUrl?: string;
  secret?: string;
};

interface AppContextProps {
  children: React.ReactNode;
}

export const AppCtx = createContext<AppContextType>({
  apiUrl: "",
  secret: "",
});
export const AppProvider = AppCtx.Provider;
export const AppConsumer = AppCtx.Consumer;

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  return (
    <AppProvider
      value={{
        apiUrl: process.env.REACT_APP_API_URL,
        secret: process.env.REACT_APP_SECRET,
      }}
    >
      {children}
    </AppProvider>
  );
};

export default AppContext;
