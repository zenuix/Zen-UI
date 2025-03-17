import React from 'react';

interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {}

const BreadcrumbPage: React.FC<BreadcrumbPageProps> = ({ children, ...props }) => {
  return (
    <span {...props} className="breadcrumb-page" role="listitem" aria-current="page">
      {children}
    </span>
  );
};

export default BreadcrumbPage;
