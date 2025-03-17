import React from 'react';

interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({ children, ...props }) => {
  return (
    <a {...props} className="breadcrumb-link" role="listitem navigation">
      {children}
    </a>
  );
};

export default BreadcrumbLink;
