import React from 'react';
import clsx from 'clsx';

type BreadcrumbPageProps = React.HTMLAttributes<HTMLSpanElement> & {};

const BreadcrumbPage = ({ children, className, ...props }: BreadcrumbPageProps) => {
  return (
    <span {...props} className={clsx('breadcrumb-page', className)} role="listitem" aria-current="page">
      {children}
    </span>
  );
};

export default BreadcrumbPage;
