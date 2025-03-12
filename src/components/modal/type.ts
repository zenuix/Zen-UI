import { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  className?: string;
  displayButton?: boolean;
}
export interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
