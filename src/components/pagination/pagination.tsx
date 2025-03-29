import { ReactNode } from 'react';
import { PaginationProvider } from './context';

const PaginationContainer = ({
  children,
  totalPages,
  pageLimit,
  leadingEllipsis,
  trailingEllipsis
}: PaginationProviderProps) => {
  return (
    <PaginationProvider
      totalPages={totalPages}
      pageLimit={pageLimit}
      leadingEllipsis={leadingEllipsis}
      trailingEllipsis={trailingEllipsis}
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
  leadingEllipsis: boolean;
  trailingEllipsis: boolean;
};
