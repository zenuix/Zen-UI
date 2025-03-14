import { DropdownSeparatorProps } from '../type';

const DropdownSeparator = (props: DropdownSeparatorProps) => {
  return <hr {...props} />;
};
DropdownSeparator.displayName = 'dropdown-separator';

export default DropdownSeparator;
