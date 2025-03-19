import React, { ReactElement, useState } from 'react';
import BreadcrumbEllipsis from './subcomponents/breadcrumb-ellipsis';
import { Ellipsis } from 'lucide-react';
import UseBreadcrumbCollapseProps from './type';

const DEFAULT_BEFORE = 2
const DEFAULT_AFTER = 1
const ELLIPSIS_SIZE = 16

export const useBreadcrumbCollapse = ({
  children,
  maxItems,
  itemsBeforeCollapse,
  itemsAfterCollapse,
  ellipsisStyle
}: UseBreadcrumbCollapseProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const childrenArray = React.Children.toArray(children) as ReactElement[];
  const items = childrenArray.filter(
    (child): child is ReactElement =>
      React.isValidElement(child) && typeof child.type === 'function' && child.type.name === 'BreadcrumbItem'
  );

  const isCollapse = maxItems !== undefined && items.length > maxItems && !isExpanded;
  let visibleItems: ReactElement[] = childrenArray;

  if (isCollapse && items.length > 0) {
    const validBeforeCollapse = 0 <= itemsBeforeCollapse && itemsBeforeCollapse < items.length
    const validAfterCollapse = 0 <= itemsAfterCollapse && itemsAfterCollapse < items.length;

    const beforeIndex = validBeforeCollapse ? childrenArray.findIndex((child) => child === items[itemsBeforeCollapse]) : DEFAULT_BEFORE;
    const afterIndex = validAfterCollapse
      ? childrenArray.findIndex((child) => child === items[items.length - itemsAfterCollapse])
      : childrenArray.length - DEFAULT_AFTER;

    if (beforeIndex < afterIndex) {
      visibleItems = [
        ...childrenArray.slice(0, beforeIndex),
        <BreadcrumbEllipsis onClick={() => setIsExpanded(true)}>
          {ellipsisStyle ?? <Ellipsis size={ELLIPSIS_SIZE} />}
        </BreadcrumbEllipsis>,
        ...childrenArray.slice(afterIndex - 1)
      ];
    }
  }

  return { visibleItems, isExpanded, setIsExpanded };
};
