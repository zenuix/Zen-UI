import { useContext } from 'react';
import { paginationContext } from '../context';
import { ChevronLeft } from 'lucide-react';

const PaginationPrevious = () => {
  const { setToPrevPage, currentPage } = useContext(paginationContext);
  return (
    <button className="pagination-btn" onClick={setToPrevPage}>
      <ChevronLeft className={`pagination-icon ${currentPage === 1 && 'pagination-disabled'}`} />
    </button>
  );
};

export default PaginationPrevious;
