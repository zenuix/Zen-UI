import { ElementType } from 'react';
import { DescriptionProps, Paragraphs } from '../type';

const ModalDescription = <T extends Paragraphs = 'p'>({ as = 'p' as T, children, ...props }: DescriptionProps<T>) => {
  const Component = as as ElementType;
  return <Component {...props}>{children}</Component>;
};

export default ModalDescription;
