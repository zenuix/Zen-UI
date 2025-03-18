import clsx from 'clsx';
import { ContentGroupProps } from '../type';

const ContentGroup = ({ children, ...props }: ContentGroupProps) => {
  return (
    <div className={clsx('content-group')} {...props}>
      {children}
    </div>
  );
};

export default ContentGroup;
