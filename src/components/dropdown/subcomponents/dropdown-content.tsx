import { forwardRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDropdownContext } from '../hook';
import { DropdownContentProps } from '../type';
import { useFocusTrap } from '../../../global-hooks';

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ children, className, ...props }, ref) => {
  const { isOpen, triggerId, menuId, triggerRef, menuRef } = useDropdownContext();

  const positionDropdown = () => {
    if (!triggerRef || !triggerRef.current || !menuRef || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();

    menuRef.current.style.top = `${triggerRect.bottom + window.scrollY}px`;
    menuRef.current.style.left = `${triggerRect.left + window.scrollX}px`;
  };

  useLayoutEffect(() => {
    if (isOpen) {
      positionDropdown();
    }
  }, [isOpen, positionDropdown]);

  useFocusTrap(menuRef as React.RefObject<HTMLDivElement | null>, isOpen);

  useEffect(() => {
    if (!menuRef || !ref) return;
    if (typeof ref === 'function') ref(menuRef.current);
    else ref.current = menuRef.current;
  }, [ref, isOpen]);

  if (!isOpen) return null;
  return createPortal(
    <div
      role="menu"
      id={menuId}
      ref={menuRef}
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
