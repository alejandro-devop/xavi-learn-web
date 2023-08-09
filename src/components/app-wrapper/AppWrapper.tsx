import { AppRouting } from "routing";
import { Provider as ReduxProvider } from "react-redux";
import store from "redux/store";
import SessionContext from "core/contexts/session-context";
import AppContext from "core/contexts/app-context/AppContext";
import ApiContext from "core/contexts/api-context";
import Head from "components/page-meta/head/Head";
import MediaQueryContext from "core/contexts/media-query-context";
const AppWrapper: React.FC = () => {
  return (
    <AppContext>
      <ReduxProvider store={store}>
        <SessionContext>
          <MediaQueryContext>
            <Head />
            <ApiContext>
              <AppRouting></AppRouting>
            </ApiContext>
          </MediaQueryContext>
        </SessionContext>
      </ReduxProvider>
    </AppContext>
  );
};

export default AppWrapper;
