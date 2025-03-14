import { ModalProps } from '../type';

const Title = ({ children, className = 'default' }: ModalProps) => {
  return <h2 className={className}>{children}</h2>;
};

export default Title;
