import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutingContext from "core/contexts/routing-context";
import RoutingWrapper from "./RoutingWrapper";
import Menu from "core/components/menu";
import StatusBar from "core/components/status-bar/StatusBar";
import { useSession } from "core/hooks";
import styles from "./app-routing.module.scss";

interface AppRoutingProps {}

/**
 * Application main router
 * @param param0
 * @returns
 */
const AppRouting: React.FC<AppRoutingProps> = () => {
  const { session } = useSession();

  return (
    <Router>
      {session.logged && (
        <>
          <StatusBar />
          <Menu />
        </>
      )}
      <div id="content" className={styles.content}>
        <RoutingContext>
          <RoutingWrapper />
        </RoutingContext>
      </div>
    </Router>
  );
};

export default AppRouting;
