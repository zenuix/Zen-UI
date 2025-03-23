import { useContext } from 'react';
import { TabsContext } from './context';

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabsContext must be used within a TabsProvider.');
  }
  return context;
};
