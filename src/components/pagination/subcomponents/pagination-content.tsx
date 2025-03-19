import { ReactNode } from 'react';

const PaginationContent = ({ children }: ContentProps) => {
  return <div className="pagination-content">{children}</div>;
};

export default PaginationContent;

type ContentProps = {
  children: ReactNode;
};
