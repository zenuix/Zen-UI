import React from 'react';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLSpanElement> & {};

const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorProps) => {
  return (
    <span {...props} className={clsx('breadcrumb-separator', className)} role="presentation" aria-hidden="true">
      {children ?? <ChevronRight size={16} />}
    </span>
  );
};

export default BreadcrumbSeparator;
