import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutingContext from "contexts/routing-context";
import RoutingWrapper from "./RoutingWrapper";

interface AppRoutingProps {}

/**
 * Application main router
 * @param param0
 * @returns
 */
const AppRouting: React.FC<AppRoutingProps> = () => {
  return (
    <Router>
      <RoutingContext>
        <RoutingWrapper />
      </RoutingContext>
    </Router>
  );
};

export default AppRouting;
