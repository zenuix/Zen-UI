import { forwardRef, useContext } from 'react';
import { dropdownContext } from '../context';
import { DropdownTriggerProps } from '../type';

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({ children, onClick, ...props }, ref) => {
  const { isOpen, openMenu, triggerId, menuId } = useContext(dropdownContext);

  const handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!!onClick && typeof onClick !== 'function')
      console.warn('onClick should be a function, ignoring invalid handler');
    else if (!!onClick) onClick(e);
    openMenu();
  };

  return (
    <button
      id={triggerId}
      ref={ref}
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
