import { forwardRef } from 'react';
import { DropdownGroupProps } from '../type';

const DropdownGroup = forwardRef<HTMLUListElement, DropdownGroupProps>(({ children, ...props }, ref) => {
  return (
    <ul role="group" ref={ref} {...props}>
      {children}
    </ul>
  );
});
DropdownGroup.displayName = 'dropdown-group';

export default DropdownGroup;
