import clsx from 'clsx';
import { useModal } from '../hook';
import { BaseDivProps } from '../type';

const ModalOverlay = ({ children, className, ...restProps }: BaseDivProps) => {
  const { animationClass } = useModal();

  return (
    <div className={clsx('modal-overlay', animationClass, className)} {...restProps}>
      {children}
    </div>
  );
};

export default ModalOverlay;
