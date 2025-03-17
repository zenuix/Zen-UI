import { LucideX } from 'lucide-react';
import { useModal } from '../hook';

const ModalCloseButton = () => {
  const { closeModal } = useModal();

  return (
    <button type="button" onClick={closeModal} className="modal-close-btn">
      <LucideX />
      <span className="sr-only">Close</span>
    </button>
  );
};

export default ModalCloseButton;
