import React from "react";

type TabsCTXType = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

export const TabsCTX = React.createContext<TabsCTXType>({
  activeTab: 0,
  setActiveTab: () => {},
});
export const TabsCTXProvider = TabsCTX.Provider;
export const TabsCTXConsumer = TabsCTX.Consumer;
