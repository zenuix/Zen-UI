import React, { ReactElement, ReactNode } from 'react';
import BreadcrumbItem from './subcomponents/breadcrumb-item';
import BreadcrumbSeparator from './subcomponents/breadcrumb-separator';

const isBreadcrumbListElement = (child: ReactNode): child is ReactElement =>
  React.isValidElement(child) && (child.type === BreadcrumbItem || child.type === BreadcrumbSeparator);

export { isBreadcrumbListElement };
