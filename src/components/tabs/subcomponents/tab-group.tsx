import { TabGroupProps } from '../type';
import '../style.css';
import clsx from 'clsx';

const TabGroup = ({ children, ...props }: TabGroupProps) => {
  return (
    <ul role="tablist" className={clsx('tab-group')} {...props}>
      {children}
    </ul>
  );
};

export default TabGroup;
