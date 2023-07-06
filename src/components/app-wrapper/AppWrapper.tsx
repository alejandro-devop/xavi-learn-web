import { AppRouting } from "routing";
import { Provider as ReduxProvider } from "react-redux";
import store from "redux/store";
import SessionContext from "contexts/session-context";
import AppContext from "contexts/app-context/AppContext";

const AppWrapper: React.FC = () => {
  return (
    <AppContext>
      <ReduxProvider store={store}>
        <SessionContext>
          <AppRouting></AppRouting>
        </SessionContext>
      </ReduxProvider>
    </AppContext>
  );
};

export default AppWrapper;
