import clsx from 'clsx';
import '../style.css';
import { DivProps } from '../type';
import { ReactElement } from 'react';
import { ContentProps } from './content';

export type ContentGroupProps = DivProps & {
  children: ReactElement<ContentProps> | ReactElement<ContentProps>[];
};

const ContentGroup = ({ children, ...props }: ContentGroupProps) => {
  return (
    <div className={clsx('content-group')} {...props}>
      {children}
    </div>
  );
};

export default ContentGroup;
