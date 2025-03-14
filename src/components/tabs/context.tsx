import { createContext, useState } from 'react';
import { TabsContextType, TabsProviderProps } from './type';

export const TabsContext = createContext<TabsContextType>({
  activeTab: '',
  setActiveTab: () => {}
});

export const TabsProvider = ({ children, defaultTab }: TabsProviderProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>;
};
