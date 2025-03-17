import { ElementType, useContext } from 'react';
import { TabProps } from '../type';
import { TabsContext } from '../context';

const Tab = <T extends keyof HTMLElementTagNameMap = 'button'>({
  children,
  id,
  as = 'button' as T,
  ...props
}: TabProps<T>) => {
  const { handleChange } = useContext(TabsContext);
  const Tag = as as ElementType;

  if (typeof id !== 'string') {
    console.warn(`Tabs: 'id' prop should be a string, but received '${typeof id}'.`);
  }

  return (
    <li role="presentation">
      <Tag role="tab" onClick={() => handleChange(id)} {...props}>
        {children}
      </Tag>
    </li>
  );
};

export default Tab;
