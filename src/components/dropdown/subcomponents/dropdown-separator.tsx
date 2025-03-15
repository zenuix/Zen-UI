import { forwardRef } from 'react';
import { DropdownSeparatorProps } from '../type';

const DropdownSeparator = forwardRef<HTMLHRElement, DropdownSeparatorProps>((props, ref) => {
  return <hr ref={ref} {...props} />;
});
DropdownSeparator.displayName = 'dropdown-separator';

export default DropdownSeparator;
