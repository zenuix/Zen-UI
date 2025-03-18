import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

export type ModalProps = {
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  withCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
};

export type ModalContextType = {
  isOpen: boolean;
  isVisible?: boolean;
  openModal: () => void;
  closeModal: () => void;
  animationClass?: string;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  withCloseButton?: boolean;
};

export type BaseDivProps = HTMLAttributes<HTMLDivElement>;

export type PolymorphicProps<T extends keyof HTMLElementTagNameMap = 'div'> = HTMLAttributes<
  HTMLElementTagNameMap[T]
> & {
  as?: T;
  children?: ReactNode;
};
