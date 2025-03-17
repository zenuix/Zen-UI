import React, { ReactNode } from 'react';

interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({ children = '>', ...props }) => {
  return (
    <span {...props} className="breadcrumb-separator" aria-hidden="true">
      {children}
    </span>
  );
};

export default BreadcrumbSeparator;
