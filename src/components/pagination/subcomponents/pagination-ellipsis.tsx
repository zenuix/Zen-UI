import { Ellipsis } from 'lucide-react';
import Page from './pagination-page';
import { useContext } from 'react';
import { paginationContext } from '../context';

const PaginationEllipsis = ({ isLeading = false }: PaginationEllipsis) => {
  const { totalPages, pages } = useContext(paginationContext);

  if (isLeading && pages[0] > 1) {
    return (
      <>
        {pages[0] > 1 && <Page page={1} />}
        {pages[0] > 2 && <Ellipsis className="pagination-icon" />}
      </>
    );
  }

  if (!isLeading && pages[pages.length - 1] < totalPages) {
    return (
      <>
        <Ellipsis className="pagination-icon" />
        <Page page={totalPages} />
      </>
    );
  }

  return null;
};

export default PaginationEllipsis;

type PaginationEllipsis = {
  isLeading?: boolean;
};
