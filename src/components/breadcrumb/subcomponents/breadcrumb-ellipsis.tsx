import React from 'react';
import clsx from 'clsx';
import { Ellipsis } from 'lucide-react';

type BreadcrumbEllipsisProps = React.HTMLAttributes<HTMLLIElement> & {};

const BreadcrumbEllipsis = ({ children, className, ...props }: BreadcrumbEllipsisProps) => {
  return (
    <li {...props} className={clsx('breadcrumb-ellipsis', className)} role="presentation" aria-hidden="true">
      {children ?? <Ellipsis />}
    </li>
  );
};

export default BreadcrumbEllipsis;
