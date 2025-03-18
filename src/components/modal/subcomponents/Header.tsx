import { ModalProps } from '../type';

const Header = ({ children, className = 'default' }: ModalProps) => {
  return <div className={className}>{children}</div>;
};

export default Header;
