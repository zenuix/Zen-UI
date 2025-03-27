import clsx from 'clsx';
import { DivProps } from '../type';
import { useTabsContext } from '../hook';
import { forwardRef } from 'react';

export type ContentProps = DivProps & {
  id: string;
};

const Content = forwardRef<HTMLDivElement, ContentProps>(({ children, id, className, ...props }, ref) => {
  const { activeTab } = useTabsContext();

  if (typeof id !== 'string') {
    console.warn(`'id' prop should be a string, but received '${typeof id}'.`);
    return null;
  }

  if (activeTab !== id) return null;

  return (
    <div role="tabpanel" className={clsx('content', className)} ref={ref} {...props}>
      {children}
    </div>
  );
});

Content.displayName = 'content';

export default Content;
