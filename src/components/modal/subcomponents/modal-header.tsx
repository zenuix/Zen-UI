import clsx from 'clsx';
import { BaseDivProps } from '../type';

const ModalHeader = ({ children, className, ...restProps }: BaseDivProps) => {
  return (
    <div className={clsx('modal-header', className)} {...restProps}>
      {children}
    </div>
  );
};

export default ModalHeader;
