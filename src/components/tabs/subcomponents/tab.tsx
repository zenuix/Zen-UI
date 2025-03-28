import clsx from 'clsx';
import { ElementType, forwardRef } from 'react';
import { ButtonProps } from '../type';
import { useTabsContext } from '../hook';

export type TabProps<T extends keyof HTMLElementTagNameMap = 'button'> = ButtonProps & {
  id: string;
  as?: T;
} & React.HTMLAttributes<HTMLElementTagNameMap[T]>;

const TabInner = <T extends keyof HTMLElementTagNameMap = 'button'>(
  { children, id, as = 'button' as T, className, ...props }: TabProps<T>,
  ref: React.ForwardedRef<HTMLElementTagNameMap[T]>
) => {
  const { activeTab, handleChange, registerTab } = useTabsContext();
  const Tag = as as ElementType;

  if (typeof id !== 'string') {
    console.warn(`'id' prop should be a string, but received '${typeof id}'.`);
  }

  /** 내부 ref와 사용자의 ref를 모두 실행하는 핸들러 */
  const handleRef = (element: HTMLElementTagNameMap[T]) => {
    if (element) {
      registerTab(element, id);
    }

    // 전달받은 ref 처리
    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    }
  };

  return (
    <li role="presentation" className={clsx('tab')}>
      <Tag
        role="tab"
        ref={handleRef}
        onClick={() => handleChange(id)}
        className={clsx('tab-button', { 'bg-gray': activeTab === id, 'active-hover': activeTab !== id }, className)}
        {...props}
      >
        {children}
      </Tag>
    </li>
  );
};

const Tab = forwardRef(TabInner);
Tab.displayName = 'tab';

export default Tab;
