import React, { ReactElement, ReactNode, useState } from 'react';
import BreadcrumbEllipsis from './subcomponents/breadcrumb-ellipsis';
import { Ellipsis } from 'lucide-react';

interface UseBreadcrumbCollapseProps {
  children: ReactNode[];
  maxItems: number;
  itemsBeforeCollapse: number;
  itemsAfterCollapse: number;
  ellipsisStyle?: ReactElement | string;
}

export const useBreadcrumbCollapse = ({
  children,
  maxItems,
  itemsBeforeCollapse,
  itemsAfterCollapse,
  ellipsisStyle
}: UseBreadcrumbCollapseProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  /**NOTE - 타입 가드 함수
   * child가 ReactElement여야 type 속성에 접근이 가능합니다.
   * 그래서 '타입 가드 함수(is)'를 이용하여 child를 ReactElement로 먼저 간주하도록 합니다.
   * child is ReactElement : child가 ReactElement라는 것을 TS가 알도록 타입 가드 적용
   * React.isValidElement(child) : child가 ReactElement인지 확인
   * typeof child.type === "function" : child.type이 "div"같은 문자열이 아니라, 함수형 컴포넌트인지 확인
   * child.type.name === "BreadcrumbItem" 그 중에서 BreadcrumbItem인지 확인
   */
  const items = children.filter(
    (child): child is ReactElement =>
      React.isValidElement(child) && typeof child.type === 'function' && child.type.name === 'BreadcrumbItem'
  );

  const isCollapse = items.length > maxItems && !isExpanded;
  let visibleItems: ReactNode[] = children;

  if (isCollapse) {
    const beforeIndex = children.findIndex((child) => child === items[itemsBeforeCollapse]);
    const afterIndex = children.findIndex((child) => child === items[items.length - itemsAfterCollapse]);

    const before = beforeIndex !== -1 ? beforeIndex : itemsBeforeCollapse;
    const after = afterIndex !== -1 ? afterIndex : items.length - itemsAfterCollapse;

    if (before < after) {
      visibleItems = [
        ...children.slice(0, before),
        <BreadcrumbEllipsis key="ellipsis" onClick={() => setIsExpanded(true)}>
          {ellipsisStyle ?? <Ellipsis size={16} />}
        </BreadcrumbEllipsis>,
        ...children.slice(after - 1)
      ];
    }
  }

  return { visibleItems, isExpanded, setIsExpanded };
};
