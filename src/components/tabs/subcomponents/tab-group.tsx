import clsx from 'clsx';
import '../style.css';
import { ReactElement, useContext } from 'react';
import { UlProps } from '../type';
import { TabProps } from './tab';
import { TabsContext } from '../context';

export type TabGroupProps = UlProps & {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
};

const TabGroup = ({ children, ...props }: TabGroupProps) => {
  const { orientation } = useContext(TabsContext);

  return (
    <ul
      role="tablist"
      className={clsx('tab-group', {
        'vertical-tab-group': orientation === 'vertical',
        'horizontal-tab-group': orientation === 'horizontal'
      })}
      {...props}
    >
      {children}
    </ul>
  );
};

export default TabGroup;
