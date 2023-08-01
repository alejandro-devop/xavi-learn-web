import { routeAliases } from "config/routing.config";
declare global {
  type ScreenConfigType = {
    title?: string;
  };
  type ScreenType = React.FC<ScreenConfigType>;
  type RoutePath = keyof typeof routeAliases;
  type SessionType = {
    user?: {
      name?: string;
      email?: string;
    };
    logged?: boolean;
    token?: string;
    refreshToken?: string;
  };

  // Api
  type EndpointConfigType = {
    [key: string]:
      | string
      | {
          url: string;
          type?: HTTPMethodType;
        };
  };

  type APIResponseType<Data = {}> = {
    status: boolean;
    env: "local" | "production";
    meta?: {
      env: "local" | "production";
    };
    already_registered?: boolean;
    errors?: string[];
    message?: string;
    data?: Data;
  };
}

export {};
