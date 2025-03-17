import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

export interface ModalProps {
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  withCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}
export interface ModalContextType {
  isOpen: boolean;
  isVisible?: boolean;
  openModal: () => void;
  closeModal: () => void;
  animationClass?: string;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  withCloseButton?: boolean;
}

export type BaseDivProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  className?: string;
};

export type PolymorphicProps<T extends keyof HTMLElementTagNameMap = 'div'> = HTMLAttributes<
  HTMLElementTagNameMap[T]
> & {
  as?: T;
  children?: ReactNode;
};

/** TitleProps - Headings 범위로 제한 */
export type TitleProps<T extends Headings = 'h2'> = PolymorphicProps<T>;

/** DescriptionProps - Paragraphs 범위로 제한 */
export type DescriptionProps<T extends Paragraphs = 'p'> = {
  as?: T;
  children?: ReactNode;
} & (T extends 'p'
  ? React.HTMLAttributes<HTMLParagraphElement>
  : T extends 'pre'
  ? React.HTMLAttributes<HTMLPreElement>
  : React.HTMLAttributes<HTMLDivElement>);

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
export type Paragraphs = 'p' | 'pre' | 'div';
