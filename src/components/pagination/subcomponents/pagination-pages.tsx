import { useContext } from 'react';
import { paginationContext } from '../context';
import PaginationPage from './pagination-page';

const PaginationPages = () => {
  const { pages } = useContext(paginationContext);

  return (
    <>
      {pages.map((page) => {
        return <PaginationPage key={page} page={page} />;
      })}
    </>
  );
};

export default PaginationPages;
