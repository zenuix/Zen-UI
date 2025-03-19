import Pagination from '.';
import './style.css';

const Preview = ({
  totalPages,
  pageLimit,
  leadingEllipsis,
  trailingEllipsis
}: {
  totalPages: number;
  pageLimit: number;
  leadingEllipsis: boolean;
  trailingEllipsis: boolean;
}) => {
  return (
    <Pagination
      totalPages={totalPages}
      pageLimit={pageLimit}
      leadingEllipsis={leadingEllipsis}
      trailingEllipsis={trailingEllipsis}
    >
      <Pagination.content>
        <Pagination.previous />
        <Pagination.ellipsis show={leadingEllipsis} type="leadingEllipsis" />
        <Pagination.pages />
        <Pagination.ellipsis show={trailingEllipsis} type="trailingEllipsis" />
        <Pagination.next />
      </Pagination.content>
    </Pagination>
  );
};

export default Preview;
