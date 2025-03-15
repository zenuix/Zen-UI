import { useContext, forwardRef } from 'react';
import { dropdownContext } from '../context';
import { DropdownContentProps } from '../type';

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ children, style, ...props }, ref) => {
  const { isOpen } = useContext(dropdownContext);

  return (
    <div ref={ref} {...props} style={{ display: isOpen ? 'block' : 'none', ...style }}>
      {children}
    </div>
  );
});

DropdownContent.displayName = 'dropdown-content';

export default DropdownContent;
