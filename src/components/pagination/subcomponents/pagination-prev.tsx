import { useContext } from 'react';
import { paginationContext } from '../context';
import { ChevronLeft } from 'lucide-react';

const PaginationPrevious = () => {
  const { prevPage, currentPage } = useContext(paginationContext);
  return (
    <div onClick={prevPage}>
      <ChevronLeft className={`icon ${currentPage === 1 && 'pagination-disabled'}`} />
    </div>
  );
};

export default PaginationPrevious;
