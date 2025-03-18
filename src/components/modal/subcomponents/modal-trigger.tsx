import { useModal } from '../hook';
import { ModalProps } from '../type';

const ModalTrigger = ({ children }: ModalProps) => {
  const { openModal } = useModal();
  return <button onClick={() => openModal()}>{children}</button>;
};

export default ModalTrigger;
