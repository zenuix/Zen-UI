import { TabsProvider } from './context';
import { TabsComponentProps } from './type';
import { findFirstTabId } from './utils';

const TabsComponent = ({ children, defaultTab, ...props }: TabsComponentProps) => {
  const initialTab = defaultTab === undefined ? findFirstTabId(children) : defaultTab;

  return (
    <TabsProvider defaultTab={initialTab} {...props}>
      {children}
    </TabsProvider>
  );
};

export default TabsComponent;
