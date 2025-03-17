import React from 'react';

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

const BreadcrumbContainer: React.FC<BreadcrumbProps> = ({ children, ...props }) => {
  return (
    <nav aria-label="breadcrumb" {...props} className="breadcrumb">
      {children}
    </nav>
  );
};

export default BreadcrumbContainer;
