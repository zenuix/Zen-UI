import { DropdownProps } from './type';
import './style.css';
import DropdownProvider from './provider';

const DropdownComponent = ({ children, ...props }: DropdownProps) => {
  return <DropdownProvider {...props}>{children}</DropdownProvider>;
};
export default DropdownComponent;
