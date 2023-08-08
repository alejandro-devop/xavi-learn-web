import { SessionCtx } from "core/contexts/session-context/SessionContext";
import { useContext } from "react";

const useSession = () => {
  const ctx = useContext(SessionCtx);
  return ctx;
};

export default useSession;
