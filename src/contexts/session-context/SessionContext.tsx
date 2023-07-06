import { useState, useEffect, useCallback } from "react";
import { createContext } from "react";
import { readFromSession } from "utils/session.utils";
import {
  hydrateSessionAction,
  setKeyAction,
  clearAction,
  setAllKeysAction,
} from "redux/slices/sessionSlice";
import { useDispatch, useSelector } from "react-redux";

type SessionContextType = {
  session: SessionType;
  setKey: (k: string, v: any) => void;
  clear: () => void;
  setAllKeys: (d: any) => void;
};

export const SessionCtx = createContext<SessionContextType>({
  session: {},
  setKey: () => null,
  setAllKeys: (d: any) => null,
  clear: () => null,
});
export const SessionProvider = SessionCtx.Provider;
export const SessionConsumer = SessionCtx.Consumer;

interface SessionContextProps {
  children: React.ReactNode;
}

const SessionContext: React.FC<SessionContextProps> = ({ children }) => {
  const [hydrated, setHydrated] = useState(false);
  const dispatch = useDispatch();
  const session = useSelector((state: any) => state.session);
  const read = useCallback(() => {
    const session = readFromSession();
    return session;
  }, []);

  const clear = () => {
    dispatch(clearAction());
  };

  const setAllKeys = (keys: { [k: string]: any }) => {
    dispatch(setAllKeysAction(keys));
  };

  const setKey = useCallback(
    (key: string, value: any) => {
      dispatch(setKeyAction({ key, value }));
    },
    [dispatch]
  );

  const hydrate = useCallback(() => {
    const session = read();
    dispatch(hydrateSessionAction(session));
  }, [read, dispatch]);

  const hydateSession = useCallback(() => {
    if (!hydrated) {
      hydrate();
      setHydrated(true);
    }
  }, [hydrated, hydrate]);

  useEffect(() => {
    hydateSession();
  }, [hydateSession]);

  return (
    <SessionProvider
      value={{
        clear,
        setAllKeys,
        session,
        setKey,
      }}
    >
      {hydrated ? (
        children
      ) : (
        <>
          <p>Loading session...</p>
        </>
      )}
    </SessionProvider>
  );
};

export default SessionContext;
