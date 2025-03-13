import './style.css';
import '../../global-style.css';
import { ReactNode } from 'react';
import { ModalProvider } from './context';

const Modal = ({ children }: { children: ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Modal;
