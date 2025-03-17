import { TabGroupProps } from '../type';

const TabGroup = ({ children, ...props }: TabGroupProps) => {
  return (
    <ul role="tablist" {...props}>
      {children}
    </ul>
  );
};

export default TabGroup;
