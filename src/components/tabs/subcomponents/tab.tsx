import { useContext } from 'react';
import { TabProps } from '../type';
import { TabsContext } from '../context';

const Tab = ({ children, id }: TabProps) => {
  const { setActiveTab } = useContext(TabsContext);

  return <button onClick={() => setActiveTab(id)}>{children}</button>;
};

export default Tab;
