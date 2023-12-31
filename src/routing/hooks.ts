import { RoutesConfigType, RouteType } from "./types";
import { useSession } from "core/hooks";

export const useAppRoutes = (routes: RoutesConfigType) => {
  const { session } = useSession();
  const { logged } = session || {};
  // const { logged } = useContext(RoutingCTX);

  /**
   * Transforms the routes configuration into an array of objects
   * with the path, element and config properties
   * @param routes
   * @returns
   */
  const getRoutesInfo = (routes: { [k: string]: any }) => {
    return Object.keys(routes).map((path) => {
      let element: ScreenType;
      let config: ScreenConfigType = {};
      if (typeof routes[path] === "object") {
        const { screen, ...otherConfig } = routes[path];
        element = screen;
        config = otherConfig;
      } else {
        element = routes[path];
      }
      return {
        path,
        element,
        config,
      } as RouteType;
    });
  };

  return getRoutesInfo(logged ? routes.authenticated : routes.unauthenticated);
};
