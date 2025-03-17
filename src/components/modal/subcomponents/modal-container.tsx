import { useModal } from '../hook';
import { BaseDivProps } from '../type';

const ModalContainer = ({ children, className = '', ...restProps }: BaseDivProps) => {
  const { isOpen, isVisible } = useModal();

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`modal-container ${className}`} {...restProps} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default ModalContainer;
