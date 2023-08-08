import { RoutingCTX } from "core/contexts/routing-context/RoutingContext";
import { useContext } from "react";

const useRouting = () => {
  const ctx = useContext(RoutingCTX);
  return ctx;
};

export default useRouting;
