import clsx from 'clsx';
import { TabsProvider } from './context';
import { findFirstTabId } from './utils';
import { ReactElement } from 'react';
import { TabGroupProps } from './subcomponents/tab-group';
import { ContentGroupProps } from './subcomponents/content-group';

type TabsComponentProps = {
  children: [ReactElement<TabGroupProps>, ReactElement<ContentGroupProps>];
  defaultTab?: string;
  tab?: string;
  onChange?: (newTab: string) => void;
};

const TabsComponent = ({ children, defaultTab, ...props }: TabsComponentProps) => {
  const initialTab = defaultTab === undefined ? findFirstTabId(children) : defaultTab;

  return (
    <TabsProvider defaultTab={initialTab} {...props}>
      <div className={clsx('tabs')}>{children}</div>
    </TabsProvider>
  );
};

export default TabsComponent;
