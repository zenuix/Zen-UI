import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { useBreadcrumbCollapse } from '../hook';

interface BreadcrumbListProps extends React.HTMLAttributes<HTMLUListElement> {
  direction?: 'row' | 'col';
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  ellipsisStyle?: ReactElement | string;
}

const BreadcrumbList: React.FC<BreadcrumbListProps> = ({
  children,
  direction = 'row',
  maxItems = 4,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2,
  ellipsisStyle,
  ...props
}) => {
  const { visibleItems } = useBreadcrumbCollapse({
    children: React.Children.toArray(children) as React.ReactNode[],
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse,
    ellipsisStyle,
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
