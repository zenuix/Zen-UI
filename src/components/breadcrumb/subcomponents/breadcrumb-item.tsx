import React from 'react';

interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, ...props }) => {
  return (
    <li {...props} className="breadcrumb-item">
      {children}
    </li>
  );
};

export default BreadcrumbItem;
