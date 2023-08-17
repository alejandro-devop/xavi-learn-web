import { useContext } from "react";
import { TabsCTX } from "../tabs-ctx";
import classNames from "classnames";
import styles from "./tab.module.scss";
interface TabProps {
  children: React.ReactNode;
  title: string;
  index?: number;
}

const Tab: React.FC<TabProps> = ({ children, index }) => {
  const { activeTab } = useContext(TabsCTX);
  return (
    <div className={classNames({ [styles.hidden]: activeTab !== index })}>
      {children}
    </div>
  );
};

export default Tab;
