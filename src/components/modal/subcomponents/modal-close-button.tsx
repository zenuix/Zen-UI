import { LucideX } from 'lucide-react';
import { useModal } from '../hook';

const ModalCloseButton = () => {
  const { closeModal, withCloseButton } = useModal();

  if (!withCloseButton) return null;

  return (
    <button type="button" onClick={closeModal} className="modal-close-btn">
      <LucideX />
      <span className="sr-only">Close</span>
    </button>
  );
};

export default ModalCloseButton;
