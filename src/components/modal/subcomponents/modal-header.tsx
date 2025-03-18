import { BaseDivProps } from '../type';

const ModalHeader = ({ children, className = '', ...restProps }: BaseDivProps) => {
  return (
    <div className={`modal-header ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default ModalHeader;
