import { ReactNode } from 'react';

const PaginationContent = ({ children }: ContentProps) => {
  return (
    <nav className="pagination-content" aria-labelledby="pagination">
      {children}
    </nav>
  );
};

export default PaginationContent;

type ContentProps = {
  children: ReactNode;
};
