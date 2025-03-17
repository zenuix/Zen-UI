import { createContext, useState } from 'react';
import { TabsContextType, TabsProviderProps } from './type';

export const TabsContext = createContext<TabsContextType>({
  activeTab: '',
  handleChange() {}
});

export const TabsProvider = ({ children, defaultTab, tab, onChange }: TabsProviderProps) => {
  const initialTab = defaultTab || '';
  const [internalTab, setInternalTab] = useState<string>(initialTab);

  const isControlled = !!tab;
  const activeTab = isControlled ? tab || initialTab : internalTab;

  const handleChange = (newTab: string) => {
    if (!isControlled) setInternalTab(newTab);
    if (onChange) onChange(newTab);
  };

  return <TabsContext.Provider value={{ activeTab, handleChange }}>{children}</TabsContext.Provider>;
};
