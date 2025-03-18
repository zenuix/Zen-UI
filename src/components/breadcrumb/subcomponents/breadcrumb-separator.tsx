import { ChevronRight } from 'lucide-react';
import React from 'react';

type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLSpanElement> & {};

const BreadcrumbSeparator = ({ children, ...props }: BreadcrumbSeparatorProps) => {
  return (
    <span {...props} className="breadcrumb-separator" role="presentation" aria-hidden="true">
      {children ?? <ChevronRight size={16} />}
    </span>
  );
};

export default BreadcrumbSeparator;
