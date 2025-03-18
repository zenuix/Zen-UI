import React from 'react';

type BreadcrumbPageProps = React.HTMLAttributes<HTMLSpanElement> & {};

const BreadcrumbPage = ({ children, ...props }: BreadcrumbPageProps) => {
  return (
    <span {...props} className="breadcrumb-page" role="listitem" aria-current="page">
      {children}
    </span>
  );
};

export default BreadcrumbPage;
