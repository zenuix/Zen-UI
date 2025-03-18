import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { useBreadcrumbCollapse } from '../hook';

type BreadcrumbListProps = React.HTMLAttributes<HTMLUListElement> & {
  direction?: 'row' | 'col';
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  ellipsisStyle?: ReactElement | string;
}

const BreadcrumbList = ({
  children,
  direction = 'row',
  maxItems = 4,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2,
  ellipsisStyle,
  ...props
}: BreadcrumbListProps) => {
  const { visibleItems } = useBreadcrumbCollapse({
    children: React.Children.toArray(children) as ReactNode[],
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse,
    ellipsisStyle
  });

  return (
    <ul
      {...props}
      className={clsx('breadcrumb-list', {
        'direction-row': direction === 'row',
        'direction-col': direction === 'col'
      })}
    >
      {visibleItems}
    </ul>
  );
};

export default BreadcrumbList;
