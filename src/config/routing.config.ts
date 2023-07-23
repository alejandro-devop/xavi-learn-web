import { RoutesConfigType } from "routing/types";
import {
  DashboardScreen,
  LearningScreen,
  LearningFollowUpScreen,
  ProfileScreen,
  SettingsScreen,
} from "screens/authenticated";
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
  learning: "/learning",
  learningFollowUp: "/learning/followup",
  profile: "/profile",
  settings: "/settings",
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
    [routeAliases.learning]: LearningScreen,
    [routeAliases.profile]: ProfileScreen,
    [routeAliases.settings]: SettingsScreen,
    [routeAliases.learningFollowUp]: LearningFollowUpScreen,
  },
};

export default routes;
