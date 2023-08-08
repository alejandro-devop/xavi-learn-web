import { AppCtx } from "core/contexts/app-context/AppContext";
import { useContext } from "react";

const useAppConfig = () => {
  const ctx = useContext(AppCtx);
  return ctx;
};

export default useAppConfig;
