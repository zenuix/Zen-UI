import { ModalProps } from '../type';

const Container = ({ children, className = 'default' }: ModalProps) => {
  return <div className={className}>{children}</div>;
};

export default Container;
