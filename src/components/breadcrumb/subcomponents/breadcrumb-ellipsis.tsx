import { Ellipsis } from 'lucide-react';
import React, { ReactNode } from 'react';

interface BreadcrumbEllipsisProps extends React.HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  onClick: () => void;
}

const BreadcrumbEllipsis: React.FC<BreadcrumbEllipsisProps> = ({ onClick, children, ...props }) => {
  return (
    <li {...props} className="breadcrumb-ellipsis" role="presentation" aria-hidden="true" onClick={onClick}>
      {children ?? <Ellipsis />}
    </li>
  );
};

export default BreadcrumbEllipsis;
