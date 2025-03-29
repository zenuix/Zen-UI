import { Ellipsis } from 'lucide-react';
import Page from './pagination-page';
import { useContext } from 'react';
import { paginationContext } from '../context';

const PaginationEllipsis = ({ show, type }: { show: boolean; type: string }) => {
  const { totalPages, pages } = useContext(paginationContext);

  if (show && type === 'leadingEllipsis' && !pages.includes(1)) {
    return (
      <>
        <Page page={1} />
        <Ellipsis className='icon' />
      </>
    );
  }

  if (show && type === 'trailingEllipsis' && !pages.includes(totalPages)) {
    return (
      <>
        <Ellipsis className='icon' />
        <Page page={totalPages} />
      </>
    );
  }

  return null;
};

export default PaginationEllipsis;
