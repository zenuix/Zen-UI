import { useContext } from 'react';
import { ContentProps } from '../type';
import { TabsContext } from '../context';

const Content = ({ children, id }: ContentProps) => {
  const { activeTabId } = useContext(TabsContext);

  if (activeTabId !== id) return null;

  return <div>{children}</div>;
};

export default Content;
