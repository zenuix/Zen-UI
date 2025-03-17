import { TabsProvider } from './context';
import Content from './subcomponents/content';
import ContentGroup from './subcomponents/content-group';
import Tab from './subcomponents/tab';
import TabGroup from './subcomponents/tab-group';
import { TabsComponentProps } from './type';

const TabsComponent = ({ children, ...props }: TabsComponentProps) => {
  return <TabsProvider {...props}>{children}</TabsProvider>;
};

const Tabs = Object.assign(TabsComponent, {
  tabGroup: TabGroup,
  tab: Tab,
  contentGroup: ContentGroup,
  content: Content
});

export default Tabs;
