import clsx from 'clsx';
import '../style.css';
import { DivProps } from '../type';
import { useTabsContext } from '../hook';

export type ContentProps = DivProps & {
  id: string;
};

const Content = ({ children, id, ...props }: ContentProps) => {
  const { activeTab } = useTabsContext();

  if (typeof id !== 'string') {
    console.warn(`'id' prop should be a string, but received '${typeof id}'.`);
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
