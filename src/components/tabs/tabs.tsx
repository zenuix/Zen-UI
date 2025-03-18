import clsx from 'clsx';
import './style.css';
import { TabsProvider } from './context';
import { findFirstTabId } from './utils';
import { ReactElement } from 'react';
import { TabGroupProps } from './subcomponents/tab-group';
import { ContentGroupProps } from './subcomponents/content-group';

type TabsComponentProps = {
  children: [ReactElement<TabGroupProps>, ReactElement<ContentGroupProps>];
  orientation?: 'vertical' | 'horizontal';
  defaultTab?: string;
  tab?: string;
  onChange?: (newTab: string) => void;
};

const TabsComponent = ({ children, defaultTab, orientation = 'vertical', ...props }: TabsComponentProps) => {
  const initialTab = defaultTab === undefined ? findFirstTabId(children) : defaultTab;

  return (
    <TabsProvider defaultTab={initialTab} orientation={orientation} {...props}>
      <div
        className={clsx('tabs', {
          'vertical-tabs': orientation === 'vertical',
          'horizontal-tabs': orientation === 'horizontal'
        })}
      >
        {children}
      </div>
    </TabsProvider>
  );
};

export default TabsComponent;
