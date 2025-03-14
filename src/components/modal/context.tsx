import { createContext, useState, ReactNode } from 'react';
import { ModalContextType } from './type';

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {}
});
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
