import DropdownProvider from './context';
import { DropdownProps } from './type';

const DropdownComponent = ({ children, ...props }: DropdownProps) => {
  return <DropdownProvider {...props}>{children}</DropdownProvider>;
};
export default DropdownComponent;
