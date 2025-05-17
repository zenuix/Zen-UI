import React from 'react';
import clsx from 'clsx';

type BreadcrumbLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {};

const BreadcrumbLink = ({ children, className, ...props }: BreadcrumbLinkProps) => {
  return (
    <a {...props} className={clsx('breadcrumb-link', className)} role="listitem navigation">
      {children}
    </a>
  );
};

export default BreadcrumbLink;
