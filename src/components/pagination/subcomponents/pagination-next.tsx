import { useContext } from 'react';
import { paginationContext } from '../context';
import { ChevronRight } from 'lucide-react';

const PaginationNext = () => {
  const { setToNextPage, currentPage, totalPages } = useContext(paginationContext);

  return (
    <button className='pagination-btn' onClick={setToNextPage}>
      <ChevronRight className={`pagination-icon ${currentPage === totalPages && 'pagination-disabled'}`} />
    </button>
  );
};

export default PaginationNext;
