import { AppRouting } from "routing";
import { Provider as ReduxProvider } from "react-redux";
import store from "redux/store";
import SessionContext from "contexts/session-context";
import AppContext from "contexts/app-context/AppContext";
import ApiContext from "contexts/api-context";
import Head from "components/page-meta/head/Head";
const AppWrapper: React.FC = () => {
  return (
    <AppContext>
      <ReduxProvider store={store}>
        <SessionContext>
          <Head />
          <ApiContext>
            <AppRouting></AppRouting>
          </ApiContext>
        </SessionContext>
      </ReduxProvider>
    </AppContext>
  );
};

export default AppWrapper;
