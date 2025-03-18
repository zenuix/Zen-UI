import { ReactElement, ReactNode } from 'react';

type UseBreadcrumbCollapseProps = {
  children: ReactNode[];
  maxItems: number;
  itemsBeforeCollapse: number;
  itemsAfterCollapse: number;
  ellipsisStyle?: ReactElement | string;
};

export default UseBreadcrumbCollapseProps;
