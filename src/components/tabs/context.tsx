import { createContext, useState } from 'react';

type TabsContextType = {
  activeTab: string | undefined;
  handleChange: (newTab: string) => void;
};

export const TabsContext = createContext<TabsContextType>({
  activeTab: undefined,
  handleChange() {}
});

type TabsProviderProps = {
  children?: React.ReactNode;
  defaultTab?: string | undefined;
  tab?: string;
  onChange?: (newTab: string) => void;
};

export const TabsProvider = ({ children, defaultTab, tab, onChange }: TabsProviderProps) => {
  const [internalTab, setInternalTab] = useState<string | undefined>(defaultTab);

  if (defaultTab === undefined && tab === undefined) {
    console.warn(`Tabs: No children found in 'TabGroup' and neither 'defaultTab' nor 'tab' value provided.`);
  }

  if (tab !== undefined && typeof tab !== 'string') {
    console.warn(`Tabs: 'tab' prop should be a string, but received '${typeof tab}'.`);
  }

  const isControlled = tab !== undefined;
  const activeTab = isControlled ? tab : internalTab;

  const handleChange = (newTab: string) => {
    if (!isControlled) setInternalTab(newTab);
    if (onChange === undefined) return;
    if (typeof onChange !== 'function') {
      console.warn(`onChange: 'onChange' prop should be a function, but received '${typeof onChange}'.`);
    } else {
      onChange(newTab);
    }
  };

  return <TabsContext.Provider value={{ activeTab, handleChange }}>{children}</TabsContext.Provider>;
};
