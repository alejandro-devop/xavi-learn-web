import { useEffect, useRef } from "react";

const Head: React.FC = () => {
  const title = useRef("Xavi-Learning").current;
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

export default Head;
