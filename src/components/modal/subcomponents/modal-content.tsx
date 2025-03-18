import { useRef } from 'react';
import { useModal } from '../hook';
import { BaseDivProps } from '../type';
import ModalCloseButton from './modal-close-button';
import { useFocusTrap, useOutsideClick } from '../../../global-hooks';

const ModalContent = ({ children, className = '', ...restProps }: BaseDivProps) => {
  const { isOpen, animationClass, closeOnBackdropClick, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => {
    if (closeOnBackdropClick) closeModal();
  });

  useFocusTrap(modalRef, isOpen);

  return (
    <div ref={modalRef} role="dialog" className={`modal-content ${animationClass} ${className}`} {...restProps}>
      {children}
      <ModalCloseButton />
    </div>
  );
};

export default ModalContent;
