import { Routes, Route, Navigate } from "react-router-dom";
import ScreenRenderer from "./ScreenRenderer";
import { useAppRoutes } from "./hooks";
import routesConfig from "config/routing.config";

const RoutingWrapper: React.FC = () => {
  const routesToRender = useAppRoutes(routesConfig);
  return (
    <Routes>
      {routesToRender.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ScreenRenderer
              path={route.path}
              Element={route.element}
              config={route.config}
            />
          }
        />
      ))}
      {/* Fallback routes */}
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default RoutingWrapper;
