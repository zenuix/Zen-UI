import clsx from 'clsx';
import React from 'react';

type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {};

const BreadcrumbContainer = ({ children, className, ...props }: BreadcrumbProps) => {
  return (
    <nav {...props} className={clsx('breadcrumb', className)} aria-label="breadcrumb">
      {children}
    </nav>
  );
};

export default BreadcrumbContainer;
