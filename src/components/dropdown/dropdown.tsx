import DropdownProvider from './context';
import { DropdownProps } from './type';
import './style.css';

const DropdownComponent = ({ children, ...props }: DropdownProps) => {
  return <DropdownProvider {...props}>{children}</DropdownProvider>;
};
export default DropdownComponent;
