import { ElementType, useContext } from 'react';
import { TabProps } from '../type';
import { TabsContext } from '../context';
import clsx from 'clsx';

const Tab = <T extends keyof HTMLElementTagNameMap = 'button'>({
  children,
  id,
  as = 'button' as T,
  ...props
}: TabProps<T>) => {
  const { activeTab, handleChange } = useContext(TabsContext);
  const Tag = as as ElementType;

  if (typeof id !== 'string') {
    console.warn(`Tabs: 'id' prop should be a string, but received '${typeof id}'.`);
  }

  return (
    <li role="presentation" className={clsx('tab')}>
      <Tag
        role="tab"
        onClick={() => handleChange(id)}
        className={clsx('tab-button', { 'bg-gray': activeTab === id })}
        {...props}
      >
        {children}
      </Tag>
    </li>
  );
};

export default Tab;
