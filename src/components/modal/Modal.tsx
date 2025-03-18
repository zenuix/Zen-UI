import './style.css';
import '../../global-style.css';
import { ModalProvider } from './context';
import { ModalProps } from './type';

const ModalComponent = ({ children, ...props }: ModalProps) => {
  return <ModalProvider {...props}>{children}</ModalProvider>;
};

export default ModalComponent;
