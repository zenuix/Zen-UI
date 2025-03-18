import clsx from 'clsx';
import { ReactElement } from 'react';
import { UlProps } from '../type';
import { TabProps } from './tab';

export type TabGroupProps = UlProps & {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
};

const TabGroup = ({ children, ...props }: TabGroupProps) => {
  return (
    <ul role="tablist" className={clsx('tab-group')} {...props}>
      {children}
    </ul>
  );
};

export default TabGroup;
