import { useContext } from 'react';
import { ContentProps } from '../type';
import { TabsContext } from '../context';

const Content = ({ children, id }: ContentProps) => {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== id) return null;

  return <div>{children}</div>;
};

export default Content;
