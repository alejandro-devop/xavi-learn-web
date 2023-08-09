import { createContext, useState } from "react";

type AppContextType = {
  apiUrl?: string;
  secret?: string;
  toggleNavbar: () => void;
  openedNavbar: boolean;
};

interface AppContextProps {
  children: React.ReactNode;
}

export const AppCtx = createContext<AppContextType>({
  apiUrl: "",
  secret: "",
  toggleNavbar: () => null,
  openedNavbar: false,
});
export const AppProvider = AppCtx.Provider;
export const AppConsumer = AppCtx.Consumer;

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [openedNavbar, setOpenedNavbar] = useState(false);
  const toggleNavbar = () => setOpenedNavbar(!openedNavbar);
  return (
    <AppProvider
      value={{
        openedNavbar,
        apiUrl: process.env.REACT_APP_API_URL,
        secret: process.env.REACT_APP_SECRET,
        toggleNavbar,
      }}
    >
      {children}
    </AppProvider>
  );
};

export default AppContext;
