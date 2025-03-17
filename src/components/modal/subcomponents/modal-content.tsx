import { useRef } from 'react';
import { useFocusTrap, useModal, useOutsideClick } from '../hook';
import { BaseDivProps } from '../type';
import CloseButton from './modal-close-button';

const ModalContent = ({ children, className = '', ...restProps }: BaseDivProps) => {
  const { isOpen, animationClass, withCloseButton, closeOnBackdropClick, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(() => {
    if (closeOnBackdropClick) closeModal();
  }, modalRef);

  useFocusTrap(modalRef, isOpen);

  return (
    <div ref={modalRef} role="dialog" className={`modal-content ${animationClass} ${className}`} {...restProps}>
      {children}
      {withCloseButton && <CloseButton />}
    </div>
  );
};

export default ModalContent;
