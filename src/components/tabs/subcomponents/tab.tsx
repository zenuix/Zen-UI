import clsx from 'clsx';
import '../style.css';
import { ElementType } from 'react';
import { ButtonProps } from '../type';
import { useTabsContext } from '../hook';

export type TabProps<T extends keyof HTMLElementTagNameMap = 'button'> = ButtonProps & {
  id: string;
  as?: T;
} & React.HTMLAttributes<HTMLElementTagNameMap[T]>;

const Tab = <T extends keyof HTMLElementTagNameMap = 'button'>({
  children,
  id,
  as = 'button' as T,
  ...props
}: TabProps<T>) => {
  const { activeTab, handleChange, registerTab } = useTabsContext();
  const Tag = as as ElementType;

  if (typeof id !== 'string') {
    console.warn(`'id' prop should be a string, but received '${typeof id}'.`);
  }

  return (
    <li role="presentation" className={clsx('tab')}>
      <Tag
        role="tab"
        ref={(element: HTMLElement) => registerTab(element, id)}
        onClick={() => handleChange(id)}
        className={clsx('tab-button', { 'bg-gray': activeTab === id, 'active-hover': activeTab !== id })}
        {...props}
      >
        {children}
      </Tag>
    </li>
  );
};

export default Tab;
