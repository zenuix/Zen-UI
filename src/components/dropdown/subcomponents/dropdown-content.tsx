import { useContext, forwardRef } from 'react';
import { dropdownContext } from '../context';
import { DropdownContentProps } from '../type';
import { createPortal } from 'react-dom';

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ children, className, ...props }, ref) => {
  const { isOpen } = useContext(dropdownContext);

  if (!isOpen) return null;
  return createPortal(
    <div ref={ref} className={`dropdown-content ${className}`} {...props}>
      {children}
    </div>,
    document.body
  );
});

DropdownContent.displayName = 'dropdown-content';

export default DropdownContent;
