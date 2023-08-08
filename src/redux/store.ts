import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/sessionSlice";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { writeToSession } from "core/utils/session.utils";

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(sessionPersistsMiddleware),
});

const handleStoreChange = (store: ToolkitStore) => {
  return () => {
    const { session } = store.getState() || {};
    writeToSession(JSON.stringify(session));
  };
};

export const unsuscribe = store.subscribe(handleStoreChange(store));

export default store;
