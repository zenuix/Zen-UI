import React, { forwardRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDropdownContext } from '../hook';
import { DropdownContentProps } from '../type';
import { useFocusTrap, useOutsideClick } from '../../../global-hooks';

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({ children, className, ...props }, ref) => {
  const { isOpen, triggerId, menuId, triggerRef, menuRef, closeMenu } = useDropdownContext();

  useLayoutEffect(() => {
    if (!isOpen) return;

    if (!triggerRef || !triggerRef.current || !menuRef || !menuRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();

    menuRef.current.style.top = `${triggerRect.bottom + window.scrollY}px`;
    menuRef.current.style.left = `${triggerRect.left + window.scrollX}px`;
  }, [isOpen, menuRef, triggerRef]);

  useFocusTrap(menuRef as React.RefObject<HTMLDivElement | null>, isOpen);

  useOutsideClick(menuRef as React.RefObject<HTMLDivElement | null>, (event) => {
    if (!triggerRef || !menuRef) return;
    if (triggerRef.current?.contains(event.target as Node) || menuRef.current?.contains(event.target as Node)) return;
    if (isOpen) closeMenu();
  });

  useEffect(() => {
    if (!menuRef || !ref) return;
    if (typeof ref === 'function') ref(menuRef.current);
    else ref.current = menuRef.current;
  }, [ref, menuRef, isOpen]);

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
