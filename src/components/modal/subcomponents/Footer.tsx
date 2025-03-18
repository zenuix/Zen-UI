import { ModalProps } from '../type';

const Footer = ({ children, className = 'default' }: ModalProps) => {
  return <div className={className}>{children}</div>;
};

export default Footer;
