import { createContext, useRef, useState } from 'react';

type TabsContextType = {
  activeTab: string | undefined;
  handleChange: (newTab: string) => void;
  orientation: 'vertical' | 'horizontal';
  tabRefs: React.RefObject<Record<string, HTMLElement | null>>;
  registerTab: (el: HTMLElement, id: string) => void;
  focusTab: (id: string) => void;
};

export const TabsContext = createContext<TabsContextType | null>(null);

type TabsProviderProps = {
  children?: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
  defaultTab?: string | undefined;
  tab?: string;
  onChange?: (newTab: string) => void;
};

export const TabsProvider = ({ children, defaultTab, orientation = 'vertical', tab, onChange }: TabsProviderProps) => {
  const [internalTab, setInternalTab] = useState<string | undefined>(defaultTab);
  const tabRefs = useRef<Record<string, HTMLElement | null>>({});

  if (defaultTab === undefined && tab === undefined) {
    console.warn(`No children found in 'TabGroup' and neither 'defaultTab' nor 'tab' value provided.`);
  }

  if (tab !== undefined && typeof tab !== 'string') {
    console.warn(`'tab' prop should be a string, but received '${typeof tab}'.`);
  }

  // 제어 또는 비제어 모드 여부
  const isControlled = tab !== undefined;
  const activeTab = isControlled ? tab : internalTab;

  /** 탭 이동 시 호출될 함수 */
  const handleChange = (newTab: string) => {
    if (!isControlled) setInternalTab(newTab);
    if (onChange === undefined) return;
    if (typeof onChange !== 'function') {
      console.warn(`'onChange' prop should be a function, but received '${typeof onChange}'.`);
    } else {
      onChange(newTab);
    }
  };

  const registerTab = (element: HTMLElement, id: string) => {
    if (element) tabRefs.current[id] = element;
  };

  const focusTab = (id: string) => {
    tabRefs.current[id]?.focus();
  };

  const value = {
    activeTab,
    handleChange,
    orientation,
    tabRefs,
    registerTab,
    focusTab
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
