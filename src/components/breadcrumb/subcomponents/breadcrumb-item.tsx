import React from 'react';

type BreadcrumbItemProps = React.HTMLAttributes<HTMLLIElement> & {};

const BreadcrumbItem = ({ children, ...props }: BreadcrumbItemProps) => {
  return (
    <li {...props} className="breadcrumb-item">
      {children}
    </li>
  );
};

export default BreadcrumbItem;
