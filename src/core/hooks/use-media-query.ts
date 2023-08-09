import { useContext } from "react";
import { MediaQueryCTX } from "core/contexts/media-query-context";

const useMediaQuery = () => {
  const context = useContext(MediaQueryCTX);
  return context;
};

export default useMediaQuery;
