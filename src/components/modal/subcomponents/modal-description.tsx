import { ElementType } from 'react';
import { DescriptionProps, Paragraphs } from '../type';

const ModalDescription = <T extends Paragraphs = 'p'>({ as, children, ...props }: DescriptionProps<T>) => {
  const Component = (as || 'p') as ElementType;
  return <Component {...props}>{children}</Component>;
};

export default ModalDescription;
