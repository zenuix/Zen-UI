import React from 'react';

type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {};

const BreadcrumbContainer = ({ children, ...props }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" {...props} className="breadcrumb">
      {children}
    </nav>
  );
};

export default BreadcrumbContainer;
