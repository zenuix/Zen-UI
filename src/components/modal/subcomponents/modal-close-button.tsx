import { LucideX } from 'lucide-react';
import { useModal } from '../hook';

const ModalCloseButton = () => {
  const { closeModal, withCloseButton } = useModal();

  if (!withCloseButton) return null;

  return (
    <button type="button" onClick={closeModal} className="modal-close-btn">
      <LucideX color="#a9a9a9" />
      <span className="sr-only">Close</span>
    </button>
  );
};

export default ModalCloseButton;
