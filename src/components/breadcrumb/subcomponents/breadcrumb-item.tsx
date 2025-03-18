import React from 'react';
import clsx from 'clsx';

type BreadcrumbItemProps = React.HTMLAttributes<HTMLLIElement> & {};

const BreadcrumbItem = ({ children, className, ...props }: BreadcrumbItemProps) => {
  return (
    <li {...props} className={clsx('breadcrumb-item', className)}>
      {children}
    </li>
  );
};

export default BreadcrumbItem;
