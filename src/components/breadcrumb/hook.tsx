import React, { ReactElement, ReactNode, useState } from 'react';
import BreadcrumbEllipsis from './subcomponents/breadcrumb-ellipsis';
import { Ellipsis } from 'lucide-react';
import UseBreadcrumbCollapseProps from './type';

export const useBreadcrumbCollapse = ({
  children,
  maxItems,
  itemsBeforeCollapse,
  itemsAfterCollapse,
  ellipsisStyle
}: UseBreadcrumbCollapseProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const items = children.filter(
    (child): child is ReactElement =>
      React.isValidElement(child) && typeof child.type === 'function' && child.type.name === 'BreadcrumbItem'
  );

  const isCollapse = maxItems !== undefined && items.length > maxItems && !isExpanded;
  let visibleItems: ReactNode[] = children;

  if (isCollapse && items.length > 0) {
    const validBeforeCollapse = itemsBeforeCollapse >= 0 && itemsBeforeCollapse < items.length;
    const validAfterCollapse = itemsAfterCollapse >= 0 && itemsAfterCollapse < items.length;

    const beforeIndex = validBeforeCollapse ? children.findIndex((child) => child === items[itemsBeforeCollapse]) : 2;
    const afterIndex = validAfterCollapse
      ? children.findIndex((child) => child === items[items.length - itemsAfterCollapse])
      : children.length - 3;

    if (beforeIndex < afterIndex) {
      visibleItems = [
        ...children.slice(0, beforeIndex),
        <BreadcrumbEllipsis onClick={() => setIsExpanded(true)}>
          {ellipsisStyle ?? <Ellipsis size={16} />}
        </BreadcrumbEllipsis>,
        ...children.slice(afterIndex - 1)
      ];
    }
  }

  return { visibleItems, isExpanded, setIsExpanded };
};
