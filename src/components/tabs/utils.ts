import { Children, isValidElement, ReactElement, ReactNode } from 'react';
import TabGroup, { TabGroupProps } from './subcomponents/tab-group';
import Tab, { TabProps } from './subcomponents/tab';
import { ContentGroupProps } from './subcomponents/content-group';

/**
 * 탭 그룹에서 가장 첫 번째 탭의 id를 구하는 함수
 * @param children - Tabs의 자식 요소 (탭 그룹 또는 내용 그룹)
 * @returns 탭의 id 또는 undefined
 */
export const findFirstTabId = (
  children: [ReactElement<TabGroupProps>, ReactElement<ContentGroupProps>]
): string | undefined => {
  const childrenArray = Children.toArray(children);
  const tabGroup = childrenArray.find(
    (child): child is ReactElement<TabGroupProps> => isValidElement(child) && child.type === TabGroup
  );

  if (!tabGroup || !isValidElement(tabGroup)) return undefined;

  const tabGroupChildren = Children.toArray(tabGroup.props.children);
  const firstTab = tabIdList(tabGroupChildren)[0];

  return firstTab;
};

/**
 * 현재 존재하는 탭의 id 리스트를 반환하는 함수
 * @param children - TabGroup의 자식 요소 (Tabs)
 * @returns id (string) 배열 또는 undefined
 */
export const tabIdList = (children: ReactNode | ReactNode[]) => {
  const childrenArray = Children.toArray(children);
  // Tab 타입인 요소만 필터링
  const tabElements = childrenArray.filter(
    (child): child is ReactElement<TabProps> => isValidElement(child) && child.type === Tab
  );
  const childIds = tabElements.map(safelyExtractId).filter((id): id is string => id !== undefined);
  return childIds;
};

/**
 * React 컴포넌트의 child로부터 id 속성을 추출하는 함수 (filter 콜백함수로 넣을 용도)
 * @param child - 자식 요소
 * @returns id 값 또는 undefined
 */
const safelyExtractId = (child: unknown): string | undefined => {
  if (!isValidElement(child)) {
    console.warn('Child is not a valid React element.');
    return undefined;
  }

  if (!child.props || typeof child.props !== 'object') {
    console.warn('Child props is not an object.');
    return undefined;
  }

  if (!('id' in child.props) || typeof child.props.id !== 'string') {
    console.warn('Child is missing string id prop.');
    return undefined;
  }

  return child.props.id;
};
