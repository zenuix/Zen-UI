import clsx from 'clsx';
import { BaseDivProps } from '../type';

const ModalFooter = ({ children, className, ...restProps }: BaseDivProps) => {
  return (
    <div className={clsx('modal-footer', className)} {...restProps}>
      {children}
    </div>
  );
};

export default ModalFooter;
