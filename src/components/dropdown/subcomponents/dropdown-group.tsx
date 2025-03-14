import { DropdownGroupProps } from '../type';

const DropdownGroup = ({ children, ...props }: DropdownGroupProps) => {
  return <ul {...props}>{children}</ul>;
};
export default DropdownGroup;
