import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./media-query.module.scss";

type MediaQueryType = "xs" | "sm" | "md" | "lg" | "xl";

export type MediaQueryContextType = {
  currentRes: MediaQueryType;
  isIn: (res: MediaQueryType[]) => boolean;
};
export const MediaQueryCTX = createContext<MediaQueryContextType>({
  currentRes: "xl",
  isIn: () => false,
});
export const MediaQueryContextProvider = MediaQueryCTX.Provider;
export const MediaQueryContextConsumer = MediaQueryCTX.Consumer;

interface MediaQueryContextProps {
  children: React.ReactNode;
}

const MediaQueryContext: React.FC<MediaQueryContextProps> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [res, setResolution] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleUpdate = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleUpdate);

    return () => {
      window.removeEventListener("resize", handleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, [loaded]);

  const currentRes: MediaQueryType = useMemo(() => {
    if (res.width < 414) return "xs";
    if (res.width < 768) return "sm";
    if (res.width < 1024) return "md";
    if (res.width < 1280) return "lg";
    return "xl";
  }, [res.width]);

  const isIn = useCallback(
    (res: MediaQueryType[]) => {
      return res.includes(currentRes);
    },
    [currentRes]
  );

  return (
    <MediaQueryContextProvider
      value={{
        currentRes,
        isIn,
      }}
    >
      {res.width > 0 && res.height > 0 && children}
      <div className={styles.mediaWrapper}>
        Resolution: w: {res.width} | h: {res.height} | {currentRes}
      </div>
    </MediaQueryContextProvider>
  );
};

export default MediaQueryContext;
