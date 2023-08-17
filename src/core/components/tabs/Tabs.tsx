import React, { useMemo, useState } from "react";
import Tab from "./tab/Tab";
import styles from "./tabs.module.scss";
import classNames from "classnames";
import { TabsCTXProvider } from "./tabs-ctx";

interface TabsProps {
  children?: React.ReactNode;
  unmountOnChange?: boolean;
  initialTab?: number;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  unmountOnChange,
  initialTab = 0,
}) => {
  const [currentTab, setTab] = useState<number>(initialTab);
  const validTabs = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === Tab) {
        return child;
      }
      return null;
    })
      ?.filter((item) => Boolean(item))
      .map((item, index) => React.cloneElement(item, { index } as any));
  }, [children]);

  const titles = useMemo(
    () => validTabs?.map((item) => (item.props as any)?.title),
    [validTabs]
  );

  const handleChange = (index: number) => {
    setTab(index);
  };

  return (
    <TabsCTXProvider
      value={{
        activeTab: currentTab,
        setActiveTab: handleChange,
      }}
    >
      <div>
        <ul className={styles.tabsHeader}>
          {titles?.map((title, key) => (
            <li
              key={`tab-${key}`}
              className={classNames({ [styles.activeTab]: currentTab === key })}
              onClick={() => setTab(key)}
            >
              <button>{title}</button>
            </li>
          ))}
        </ul>
        {unmountOnChange ? <>{validTabs?.[currentTab]}</> : validTabs}
      </div>
    </TabsCTXProvider>
  );
};

export default Tabs;
