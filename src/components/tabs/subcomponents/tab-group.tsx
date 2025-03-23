import clsx from 'clsx';
import '../style.css';
import { ReactElement } from 'react';
import { UlProps } from '../type';
import { TabProps } from './tab';
import { useTabsContext } from '../hook';
import { tabIdList } from '../utils';

export type TabGroupProps = UlProps & {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
};

const TabGroup = ({ children, ...props }: TabGroupProps) => {
  const { activeTab, orientation, handleChange, focusTab } = useTabsContext();
  const tabIds = tabIdList(children);

  /** 키보드 접근성 관련 함수 */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = tabIds.findIndex((element) => element === activeTab);

    const isPrevKey =
      (orientation === 'vertical' && e.key === 'ArrowLeft') || (orientation === 'horizontal' && e.key === 'ArrowUp');
    const isNextKey =
      (orientation === 'vertical' && e.key === 'ArrowRight') || (orientation === 'horizontal' && e.key === 'ArrowDown');

    if (isPrevKey) {
      const prevId = tabIds[(currentIndex - 1 + tabIds.length) % tabIds.length];
      handleChange(prevId);
      focusTab(prevId);
    }

    if (isNextKey) {
      const nextId = tabIds[(currentIndex + 1) % tabIds.length];
      handleChange(nextId);
      focusTab(nextId);
    }
  };

  return (
    <ul
      role="tablist"
      className={clsx('tab-group', {
        'vertical-tab-group': orientation === 'vertical',
        'horizontal-tab-group': orientation === 'horizontal'
      })}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </ul>
  );
};

export default TabGroup;
