import { DropdownGroupProps } from '../type';

const DropdownGroup = ({ children, ...props }: DropdownGroupProps) => {
  return <ul {...props}>{children}</ul>;
};
DropdownGroup.displayName = 'dropdown-group';

export default DropdownGroup;
