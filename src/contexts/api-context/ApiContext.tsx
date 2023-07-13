import React, { useRef, createContext, useEffect, useMemo } from "react";
import { HttpClient } from "./classes";
import useAppConfig from "hooks/useAppConfig";
import endpoints from "config/api-endpoints.config.json";
import { ApiContextType } from "./types";
import { useSession } from "hooks";

export const ApiCtx = createContext<ApiContextType>({
  client: new HttpClient({ apiUrl: "", endpoints }),
});

export const ApiProvider = ApiCtx.Provider;
export const ApiConsumer = ApiCtx.Consumer;

interface APIContextProps {
  children?: React.ReactNode;
}

/**
 * Context for the API requests, it instance the http client and allow access to it
 * through the React context api.
 * @param param0
 * @returns
 */
const ApiContext: React.FC<APIContextProps> = ({ children }) => {
  const { apiUrl } = useAppConfig();
  const { session } = useSession();

  const client = useRef(
    new HttpClient({
      apiUrl: apiUrl || "",
      endpoints,
    })
  ).current;
  client.setApiToken(session?.token);

  const apiToken = useMemo(() => client.getApiToken(), [client]);

  useEffect(() => {
    if (session.logged && apiToken !== session?.token) {
      client.setApiToken(session?.token);
    }
  }, [apiToken, session?.logged, session?.token, client]);

  return (
    <ApiProvider
      value={{
        client,
      }}
    >
      {children}
    </ApiProvider>
  );
};

export default ApiContext;
