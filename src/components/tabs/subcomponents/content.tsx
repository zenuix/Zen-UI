import { useContext } from 'react';
import { ContentProps } from '../type';
import { TabsContext } from '../context';

const Content = ({ children, id, ...props }: ContentProps) => {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== id) return null;

  return (
    <div role="tabpanel" {...props}>
      {children}
    </div>
  );
};

export default Content;
