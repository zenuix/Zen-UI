import ModalComponent from './modal';
import ModalContainer from './subcomponents/modal-container';
import ModalContent from './subcomponents/modal-content';
import ModalDescription from './subcomponents/modal-description';
import ModalFooter from './subcomponents/modal-footer';
import ModalHeader from './subcomponents/modal-header';
import ModalOverlay from './subcomponents/modal-overlay';
import ModalTitle from './subcomponents/modal-title';
import ModalTrigger from './subcomponents/modal-trigger';

const Modal = Object.assign(ModalComponent, {
  overlay: ModalOverlay,
  container: ModalContainer,
  content: ModalContent,
  trigger: ModalTrigger,
  header: ModalHeader,
  footer: ModalFooter,
  title: ModalTitle,
  description: ModalDescription
});

export default Modal;
