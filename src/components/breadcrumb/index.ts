import BreadcrumbContainer from './breadcrumb';
import BreadcrumbItem from './subcomponents/breadcrumb-item';
import BreadcrumbLink from './subcomponents/breadcrumb-link';
import BreadcrumbList from './subcomponents/breadcrumb-list';
import BreadcrumbPage from './subcomponents/breadcrumb-page';
import BreadcrumbSeparator from './subcomponents/breadcrumb-separator';

const Breadcrumb = Object.assign(BreadcrumbContainer, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
  Page: BreadcrumbPage
});

export default Breadcrumb;
