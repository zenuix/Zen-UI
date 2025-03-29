import PaginationContainer from './pagination';
import PaginationPages from './subcomponents/pagination-pages';
import PaginationContent from './subcomponents/pagination-content';
import PaginationEllipsis from './subcomponents/pagination-ellipsis';
import PaginationNext from './subcomponents/pagination-next';
import PaginationPrevious from './subcomponents/pagination-prev';

const Pagination = Object.assign(PaginationContainer, {
  pages: PaginationPages,
  next: PaginationNext,
  previous: PaginationPrevious,
  content: PaginationContent,
  ellipsis: PaginationEllipsis
});

export default Pagination;
