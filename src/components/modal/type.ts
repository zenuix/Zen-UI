import { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  className?: string;
  withCloseButton?: boolean;
}
export interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
