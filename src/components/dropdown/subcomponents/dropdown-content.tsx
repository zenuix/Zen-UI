import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { useDropdownContext } from '../hook';
import { DropdownContentProps } from '../type';

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ children, className, ...props }, ref) => {
  const { isOpen, triggerId, menuId } = useDropdownContext();

  if (!isOpen) return null;
  return createPortal(
    <div
      role="menu"
      id={menuId}
      ref={ref}
      className={`dropdown-content ${className}`}
      aria-labelledby={triggerId}
      {...props}
    >
      {children}
    </div>,
    document.body
  );
});

DropdownContent.displayName = 'dropdown-content';

export default DropdownContent;
