import BreadcrumbContainer from './breadcrumb';
import BreadcrumbItem from './subcomponents/breadcrumb-item';
import BreadcrumbLink from './subcomponents/breadcrumb-link';
import BreadcrumbList from './subcomponents/breadcrumb-list';
import BreadcrumbPage from './subcomponents/breadcrumb-page';
import BreadcrumbSeparator from './subcomponents/breadcrumb-separator';
import BreadcrumbEllipsis from './subcomponents/breadcrumb-ellipsis';

const Breadcrumb = Object.assign(BreadcrumbContainer, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
  Page: BreadcrumbPage,
  Ellipsis: BreadcrumbEllipsis
});

export default Breadcrumb;
