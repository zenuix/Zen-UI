import { useContext } from 'react';
import { paginationContext } from '../context';
import { ChevronRight } from 'lucide-react';

const PaginationNext = () => {
  const { nextPage, currentPage, totalPages } = useContext(paginationContext);

  return (
    <div onClick={nextPage}>
      <ChevronRight className={`icon ${currentPage === totalPages && 'pagination-disabled'}`}  />
    </div>
  );
};

export default PaginationNext;
