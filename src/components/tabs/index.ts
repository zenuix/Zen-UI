import Content from './subcomponents/content';
import ContentGroup from './subcomponents/content-group';
import Tab from './subcomponents/tab';
import TabGroup from './subcomponents/tab-group';
import TabsComponent from './tabs';

const Tabs = Object.assign(TabsComponent, {
  tabGroup: TabGroup,
  tab: Tab,
  contentGroup: ContentGroup,
  content: Content
});

export default Tabs;
