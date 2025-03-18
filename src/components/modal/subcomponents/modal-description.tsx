import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';

/** DescriptionProps - Paragraphs 범위로 제한 */
export type Paragraphs = 'p' | 'pre' | 'div';
export type DescriptionProps<T extends Paragraphs = 'p'> = {
  as?: T;
  children?: ReactNode;
} & (T extends 'p'
  ? React.HTMLAttributes<HTMLParagraphElement>
  : T extends 'pre'
  ? React.HTMLAttributes<HTMLPreElement>
  : React.HTMLAttributes<HTMLDivElement>);

const ModalDescription = <T extends Paragraphs = 'p'>({ as = 'p' as T, children, ...props }: DescriptionProps<T>) => {
  const Component = as as ElementType;
  return (
    <Component className={clsx('modal-description', props.className)} {...props}>
      {children}
    </Component>
  );
};

export default ModalDescription;
