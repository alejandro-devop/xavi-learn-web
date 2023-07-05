/**
 * The two main stacks which can be defined by the routing configuration
 */
export type RoutesConfigType = {
  authenticated: RouteConfigType;
  unauthenticated: RouteConfigType;
};
/**
 * Configuration to define the routes from the config file
 */
export type RouteConfigType = {
  [k: string]:
    | ScreenType
    | ({
        screen: ScreenType;
      } & ScreenConfigType);
};

/**
 * Configuration for the output of mapping the routes configuration
 */
export type RouteType = {
  path: string;
  element: ScreenType;
  config?: ScreenConfigType;
};
