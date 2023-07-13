import { RoutesConfigType } from "routing/types";
import { DashboardScreen } from "screens/authenticated";
import {
  LandingScreen,
  LoginScreen,
  RegisterScreen,
} from "screens/unauthenticated";

export const routeAliases = {
  landing: "/",
  login: "/login",
  register: "/register",
  dashboard: "/",
};

const routes: RoutesConfigType = {
  unauthenticated: {
    [routeAliases.landing]: {
      screen: LandingScreen,
      title: "Landing title",
    },
    [routeAliases.login]: LoginScreen,
    [routeAliases.register]: RegisterScreen,
  },
  authenticated: {
    [routeAliases.dashboard]: DashboardScreen,
  },
};

export default routes;
