import { Ellipsis } from 'lucide-react';
import React from 'react';

type BreadcrumbEllipsisProps = React.HTMLAttributes<HTMLLIElement> & {};

const BreadcrumbEllipsis = ({ children, ...props }: BreadcrumbEllipsisProps) => {
  return (
    <li {...props} className="breadcrumb-ellipsis" role="presentation" aria-hidden="true">
      {children ?? <Ellipsis />}
    </li>
  );
};

export default BreadcrumbEllipsis;
