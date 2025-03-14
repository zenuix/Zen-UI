import { ModalProps } from '../type';

const Description = ({ children, className = 'default' }: ModalProps) => {
  return <p className={className}>{children}</p>;
};

export default Description;
