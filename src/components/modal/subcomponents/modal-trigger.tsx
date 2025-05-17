import clsx from 'clsx';
import { useModal } from '../hook';
import { ModalProps } from '../type';

const ModalTrigger = ({ children, className }: ModalProps) => {
  const { openModal } = useModal();
  return (
    <button className={clsx('modal-trigger', className)} onClick={() => openModal()}>
      {children}
    </button>
  );
};

export default ModalTrigger;
