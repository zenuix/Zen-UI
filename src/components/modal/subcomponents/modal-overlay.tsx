import { useModal } from '../hook';
import { BaseDivProps } from '../type';

const ModalOverlay = ({ children, className = '', ...restProps }: BaseDivProps) => {
  const { animationClass } = useModal();

  return (
    <div className={`modal-overlay ${animationClass} ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default ModalOverlay;
