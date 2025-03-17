import { ChevronRight } from 'lucide-react';
import React, { ReactNode } from 'react';

interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({ children, ...props }) => {
  return (
    <span {...props} className="breadcrumb-separator" role="presentation" aria-hidden="true">
      {children ?? <ChevronRight size={16} />}
    </span>
  );
};

export default BreadcrumbSeparator;
