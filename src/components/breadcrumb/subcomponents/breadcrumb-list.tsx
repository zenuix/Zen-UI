import clsx from 'clsx';
import React from 'react';

interface BreadcrumbListProps extends React.HTMLAttributes<HTMLUListElement> {
  direction?: 'row' | 'col'
}

const BreadcrumbList: React.FC<BreadcrumbListProps> = ({ children, direction='row', ...props }) => {
  return (
    <ul {...props} className={clsx('breadcrumb-list', {
      'direction-row': direction === 'row',
      'direction-col': direction === 'col',
    })}>
      {children}
    </ul>
  );
};

export default BreadcrumbList;
