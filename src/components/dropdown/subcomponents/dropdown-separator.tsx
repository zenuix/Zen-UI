import { forwardRef } from 'react';
import { DropdownSeparatorProps } from '../type';

const DropdownSeparator = forwardRef<HTMLHRElement, DropdownSeparatorProps>((props, ref) => {
  return <hr ref={ref} role="separator" aria-orientation="horizontal" {...props} />;
});
DropdownSeparator.displayName = 'dropdown-separator';

export default DropdownSeparator;
