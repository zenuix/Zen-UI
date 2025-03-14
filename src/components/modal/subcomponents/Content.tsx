import { ModalProps } from '../type';

const Content = ({ children, className = 'default' }: ModalProps) => {
  return <div className={className}>{children}</div>;
};

export default Content;
