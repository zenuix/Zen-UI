import clsx from 'clsx';
import { useContext } from 'react';
import { TabsContext } from '../context';
import { DivProps } from '../type';

export type ContentProps = DivProps & {
  id: string;
};

const Content = ({ children, id, ...props }: ContentProps) => {
  const { activeTab } = useContext(TabsContext);

  if (typeof id !== 'string') {
    console.warn(`Tabs: 'id' prop should be a string, but received '${typeof id}'.`);
    return null;
  }

  if (activeTab !== id) return null;

  return (
    <div role="tabpanel" className={clsx('content')} {...props}>
      {children}
    </div>
  );
};

export default Content;
