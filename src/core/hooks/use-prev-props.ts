import { useRef, useEffect } from "react";
const usePrevProps = (value: any) => {
  const valuesRef = useRef(value);
  useEffect(() => {
    valuesRef.current = value;
  });
  return valuesRef.current;
};

export default usePrevProps;
