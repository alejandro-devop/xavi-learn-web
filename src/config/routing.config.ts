import { RoutesConfigType } from "routing/types";
import { DashboardScreen } from "screens/authenticated";
import {
  LandingScreen,
  LoginScreen,
  RegisterScreen,
} from "screens/unauthenticated";

const routes: RoutesConfigType = {
  unauthenticated: {
    "/": {
      screen: LandingScreen,
      title: "Landing title",
    },
    "/login": LoginScreen,
    "/register": RegisterScreen,
  },
  authenticated: {
    "/": DashboardScreen,
  },
};

export default routes;
