import { useState } from 'react';
import { TabsContext } from './context';
import Content from './subcomponents/content';
import ContentGroup from './subcomponents/content-group';
import Tab from './subcomponents/tab';
import TabGroup from './subcomponents/tab-group';
import { TabsContainerProps } from './type';

/**
 * Tabs 전체 컨테이너
 */
const TabsContainer = ({ children, defaultTabId }: TabsContainerProps) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);
  return <TabsContext.Provider value={{ activeTabId, setActiveTabId }}>{children}</TabsContext.Provider>;
};

/**
 * Tabs 컴파운드 컴포넌트
 */
const Tabs = Object.assign(TabsContainer, {
  TabGroup,
  Tab,
  ContentGroup,
  Content
});

export default Tabs;
