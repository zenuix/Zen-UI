import { useContext } from 'react';
import { paginationContext } from '../context';

const PaginationPage = ({ page }: { page: number }) => {
  const { currentPage, selectPage } = useContext(paginationContext);
  const isActive = currentPage === page;

  return (
    <button key={page} onClick={() => selectPage(page)} className={`pagination-btn ${isActive ? 'pagination-active-btn' : ''}`}>
      {page}
    </button>
  );
};

export default PaginationPage;
