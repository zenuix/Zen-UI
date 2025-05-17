import { ReactNode } from 'react';
import { PaginationProvider } from './context';

const PaginationContainer = ({ children, totalPages, pageLimit, onPageChange }: PaginationProviderProps) => {
  return (
    <PaginationProvider
      totalPages={totalPages}
      pageLimit={pageLimit}
      onPageChange={onPageChange}
      aria-label="pagination"
    >
      {children}
    </PaginationProvider>
  );
};

export default PaginationContainer;

type PaginationProviderProps = {
  children: ReactNode;
  totalPages: number;
  pageLimit: number;
  onPageChange?: (page: number) => void;
};
