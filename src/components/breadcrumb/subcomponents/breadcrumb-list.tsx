import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { useBreadcrumbCollapse } from '../hook';
import { isBreadcrumbListElement } from '../util';

type BreadcrumbListProps = React.HTMLAttributes<HTMLUListElement> & {
  direction?: 'row' | 'col';
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  ellipsisStyle?: ReactElement | string;
};

const BreadcrumbList = ({
  children,
  className,
  direction = 'row',
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2,
  ellipsisStyle,
  ...props
}: BreadcrumbListProps) => {
  const allChildren = React.Children.toArray(children) as ReactNode[];
  const filteredChildren = allChildren.filter(isBreadcrumbListElement);

  const { visibleItems } = useBreadcrumbCollapse({
    children: filteredChildren,
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse,
    ellipsisStyle
  });

  return (
    <ul
      {...props}
      className={clsx('breadcrumb-list', className, {
        'direction-row': direction === 'row',
        'direction-col': direction === 'col'
      })}
      role="list"
    >
      {visibleItems}
    </ul>
  );
};

export default BreadcrumbList;
