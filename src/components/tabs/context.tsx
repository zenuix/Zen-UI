import { createContext } from 'react';

/**
 * context 타입
 */
interface TabsContextType {
  activeTabId: string | null;
  setActiveTabId: ((id: string) => void) | null;
}

const initialValue = {
  activeTabId: null,
  setActiveTabId: null
};

export const TabsContext = createContext<TabsContextType>(initialValue);
