import { useModal } from '../hook';
import { BaseDivProps } from '../type';
import { clsx } from 'clsx';

const ModalContainer = ({ children, className, ...restProps }: BaseDivProps) => {
  const { isOpen, isVisible } = useModal();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (typeof restProps.onClick === 'function') {
      restProps.onClick(e);
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div className={clsx('modal-container', className)} onClick={handleClick} {...restProps}>
      {children}
    </div>
  );
};

export default ModalContainer;
