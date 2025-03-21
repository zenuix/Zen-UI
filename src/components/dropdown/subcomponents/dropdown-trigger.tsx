import { forwardRef, useEffect } from 'react';
import { useDropdownContext } from '../hook';
import { DropdownTriggerProps } from '../type';

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({ children, onClick, ...props }, ref) => {
  const { isOpen, triggerId, menuId, triggerRef, toggleMenu } = useDropdownContext();

  const handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!!onClick && typeof onClick !== 'function')
      console.warn('onClick should be a function, ignoring invalid handler');
    else if (!!onClick) onClick(e);
    toggleMenu();
  };

  useEffect(() => {
    if (!triggerRef || !ref) return;
    if (typeof ref === 'function') ref(triggerRef.current);
    else ref.current = triggerRef.current;
  }, [ref, isOpen]);

  return (
    <button
      id={triggerId}
      ref={triggerRef}
      onClick={handleTriggerClick}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      {...(isOpen ? { 'aria-controls': menuId } : {})}
      {...props}
    >
      {children}
    </button>
  );
});
DropdownTrigger.displayName = 'dropdown-trigger';

export default DropdownTrigger;
