import { useModal } from '../hook';
import { BaseDivProps } from '../type';

const ModalContainer = ({ children, className = '', ...restProps }: BaseDivProps) => {
  const { isOpen, isVisible } = useModal();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (typeof restProps.onClick === 'function') {
      restProps.onClick(e);
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`modal-container ${className}`} onClick={handleClick} {...restProps}>
      {children}
    </div>
  );
};

export default ModalContainer;
