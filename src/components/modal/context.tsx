import { createContext, useEffect, useState } from 'react';
import { ModalContextType, ModalProps } from './type';
import { useEscapeKey } from './hook';

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  isVisible: false,
  openModal: () => {},
  closeModal: () => {},
  animationClass: '',
  closeOnBackdropClick: true,
  closeOnEscape: true,
  withCloseButton: true
});

export const ModalProvider = ({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
  closeOnBackdropClick = true,
  withCloseButton = true,
  closeOnEscape = true
}: ModalProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [isVisible, setIsVisible] = useState(open);
  const [animationClass, setAnimationClass] = useState('');
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  if (open && !onOpenChange)
    console.warn("Both 'open' and 'onOpenChange' props must be provided together. " + 'Either provide both or none.');

  const setOpen = (value: boolean) => {
    if (onOpenChange && typeof onOpenChange !== 'function')
      console.warn('onOpenChange should be a function, ignoring invalid handler');
    else if (onOpenChange) onOpenChange(value);
    if (!isControlled) setInternalOpen(value);
  };

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEscapeKey(closeModal, isOpen && closeOnEscape);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setAnimationClass('open');
      document.body.style.overflow = 'hidden';
    } else {
      setAnimationClass('close');
      setTimeout(() => {
        setIsVisible(false);
        setAnimationClass('');
      }, 300);
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        animationClass,
        closeOnBackdropClick,
        closeOnEscape,
        withCloseButton,
        isVisible
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
