import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutingContext from "contexts/routing-context";
import RoutingWrapper from "./RoutingWrapper";
import { Menu } from "components";
import StatusBar from "components/status-bar/StatusBar";

interface AppRoutingProps {}

/**
 * Application main router
 * @param param0
 * @returns
 */
const AppRouting: React.FC<AppRoutingProps> = () => {
  return (
    <Router>
      <StatusBar />
      <Menu />
      <div id="content">
        <RoutingContext>
          <RoutingWrapper />
        </RoutingContext>
      </div>
    </Router>
  );
};

export default AppRouting;
