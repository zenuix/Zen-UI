import clsx from 'clsx';
import { DivProps } from '../type';
import { forwardRef, ReactElement } from 'react';
import { ContentProps } from './content';

export type ContentGroupProps = DivProps & {
  children: ReactElement<ContentProps> | ReactElement<ContentProps>[];
};

const ContentGroup = forwardRef<HTMLDivElement, ContentGroupProps>(({ children, className, ...props }, ref) => {
  return (
    <div className={clsx('content-group', className)} ref={ref} {...props}>
      {children}
    </div>
  );
});

ContentGroup.displayName = 'content-group';

export default ContentGroup;
