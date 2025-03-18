import { Children, isValidElement, ReactElement } from 'react';
import TabGroup, { TabGroupProps } from './subcomponents/tab-group';
import Tab, { TabProps } from './subcomponents/tab';

export const findFirstTabId = (children: React.ReactNode): string | undefined => {
  const childrenArray = Children.toArray(children);

  const tabGroup = childrenArray.find(
    (child): child is ReactElement<TabGroupProps> => isValidElement(child) && child.type === TabGroup
  );

  if (!tabGroup || !isValidElement(tabGroup)) return undefined;

  const tabListChildren = Children.toArray(tabGroup.props.children);
  const firstTab = tabListChildren.find(
    (child): child is ReactElement<TabProps> => isValidElement(child) && (child.type as any) === Tab
  );

  if (!firstTab || !isValidElement(firstTab)) return undefined;

  return firstTab.props.id;
};
