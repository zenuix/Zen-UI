import React from 'react';

interface BreadcrumbListProps extends React.HTMLAttributes<HTMLUListElement> {}

const BreadcrumbList: React.FC<BreadcrumbListProps> = ({ children, ...props }) => {
  return (
    <ul {...props} className={'breadcrumb-list'}>
      {children}
    </ul>
  );
};

export default BreadcrumbList;
