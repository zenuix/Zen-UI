import React from 'react';

type BreadcrumbLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {};

const BreadcrumbLink = ({ children, ...props }: BreadcrumbLinkProps) => {
  return (
    <a {...props} className="breadcrumb-link" role="listitem navigation">
      {children}
    </a>
  );
};

export default BreadcrumbLink;
