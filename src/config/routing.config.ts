import { RoutesConfigType } from "routing/types";
import {
  DashboardScreen,
  LearningScreen,
  LearningFollowUpScreen,
  ListCoursesScreen,
  ProfileScreen,
  SettingsScreen,
  TestingHallScreen,
  ViewCourseScreen,
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
  learningFollowUp: "/learning/courses/:courseId/followup",
  coursesView: "/learning/courses/:courseId/view",
  coursesList: "/learning/courses",
  profile: "/profile",
  settings: "/settings",
  testingHall: "/testing-hall",
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
    [routeAliases.coursesList]: ListCoursesScreen,
    [routeAliases.coursesView]: ViewCourseScreen,
    [routeAliases.testingHall]: TestingHallScreen,
  },
};

export default routes;
